'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();
    this.routes = {get:{}, post:{}, put: {}, delete: {}};
  }

  use(middleware){

  }

  get(url, handler){

    this.routes.get[url] = handler;

  }

  post(url, handler){

    this.routes.post[url] = handler;
  }

  put(url, handler){

    this.routes.put[url] = handler;
  }

  delete(url, handler){

    this.routes.delete[url] = handler;
  }

  listen(port, callback) {

    this.server.listen(port);
    callback();


    this.server.on('request', (request, response) => {

      this.handleRequest(request, response);

    });
  }

  handleRequest(request, response){

    let callback = this.findCallback(request.method.toLowerCase(), request.url);

      if(callback){

        response.send = (str)=> {
          response.write(str);
          response.end();
        }
        request.params = this.findParams(request.method.toLowerCase(), callback[0], request.url);
        callback[1](request, response);

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
}

module.exports = CustomExpress;