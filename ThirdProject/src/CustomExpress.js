'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();
    this.routes = {get:{}, post:{}, put: {}, delete: {}};
    this.middlewares = []; //global middlewares
    this.middlewarePosition;//middleware pointer
    this.waitForRequest();

  }

  use(middleware){

    this.middlewares.push(middleware); //register global middlewares

  }

  get(url, handler){

    this.routes.get[url] = handler;//register get request

  }

  post(url, handler){

    this.routes.post[url] = handler;//register post request
  }

  put(url, handler){

    this.routes.put[url] = handler;//register put request
  }

  delete(url, handler){

    this.routes.delete[url] = handler;//register delete request
  }

  listen(port, callback) {

    this.server.listen(port);
    callback();

  }

  handleRequest(request, response){

    let callback = this.findCallback(request.method.toLowerCase(), request.url);
      //only when there is a callback, meaning the url is registered, the following will be executed
      if(callback){
        //set the send method
        response.send = (str)=> {
          response.write(str);
          response.end();
        }
        //set the params
        request.params = this.findParams(request.method.toLowerCase(), callback[0], request.url);
        //execute the right callback
        callback[1](request, response);
      //if the url is not registered the badrequset method will be called
      }else{

        this.badRequest(response);
      }
  }

  findCallback(method, requestUrl){

    if(this.routes[method][requestUrl]){
      return [requestUrl, this.routes[method][requestUrl]];
    }else{
      let keys = Object.keys(this.routes[method]);
      for(let i = 0; i < keys.length; i++){
        let key_arr = keys[i].split("/").splice(1);
        let req_arr = requestUrl.split("/").splice(1);
        if(key_arr.length == req_arr.length){
          let flag = true;
          for(let j = 0; j < key_arr.length; j++){
            if(!key_arr[j].includes(":") && key_arr[j] != req_arr[j]){
              flag = false;
            }
          }
          if(flag){
            return [keys[i], this.routes[method][keys[i]]];
          }
        }
      }
    }
    return null;
  }

  findParams(method, Url, requestUrl){

    if(this.routes[method][requestUrl]){

      return {};

    }else{

      let key_arr = Url.split("/").splice(1);
      let req_arr = requestUrl.split("/").splice(1);
      let params = {};
      for(let h = 0; h < key_arr.length; h++){

        if(key_arr[h].includes(":")){
          let p = key_arr[h].replace(":", "");
          params[p] = req_arr[h];
        }
      }
      return params;
    }
  }

  badRequest(response){

    response.write("Page Not Found");
    response.end();

  }
  //refactory the request body string to a Json object
  getJsonObject(str){

    let newstr = str.replace(/=/g, "\" : \"").replace(/&/g, "\" , \"");
    newstr = "{ \"" + newstr + "\" }";
    return JSON.parse(newstr);

  }

  next(){

    this.middlewarePosition++;
  }

  waitForRequest(){

    this.server.on('request', (request, response) => { //every request will invoke this method

      this.middlewarePosition = 0; //at the very beginning of every request, set the pointer to 0

      for(let i = 0; i < this.middlewares.length; i++){ //go through all the global middlewares

        if(this.middlewarePosition == i){ //only if the pointer points to the next middleware, the next middleware will be invoked

          this.middlewares[i](request, response, this.next.bind(this)); // call the next() function to increment the pointer
        }
      }

      if(this.middlewarePosition == this.middlewares.length){ // only when all the global middlewares are done, the real request will start
          //to set the request body
          let requestBody = [];

          request.on('data', (chunk) => {

            requestBody.push(chunk);

          }).on('end', () => {

            requestBody = Buffer.concat(requestBody).toString();

            response.on('error', (err) => {
                console.error(err);
            });
            // at this point, `body` has the entire request body stored in it as a string
            if(request.method == 'PUT' || request.method == 'POST'){

               request.body = this.getJsonObject(requestBody);

            }
            //response.setHeader('Content-Type', 'application/json');
            //handle the request, including setting the params, finding the callbacks
            this.handleRequest(request, response);

          });
      }
    });
  }

}

module.exports = CustomExpress;