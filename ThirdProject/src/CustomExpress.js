'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();
    this.routes = {};
  }

  use(middleware){

  }

  get(url, handler){


    this.routes[url] = handler;


  }

  post(url, handler){

  }

  put(url, handler){

  }

  delete(url, handler){

  }

  findCallback(requestUrl){

    if(this.routes[requestUrl]){
      return [requestUrl, this.routes[requestUrl]];
    }else{
      let keys = Object.keys(this.routes);
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
            return [keys[i], this.routes[keys[i]]];
          }
        }
      }
    }
    return null;
  }
  findParams(Url, requestUrl){

    if(this.routes[requestUrl]){
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

  listen(port, callback) {

    this.server.listen(port);
    callback();


    this.server.on('request', (request, response) => {

      let callback = this.findCallback(request.url);

      if(callback){

        response.send = (str)=> {
          response.write(str);
          response.end();
        }
        request.params = this.findParams(callback[0], request.url);
        callback[1](request, response);

      }else{

        this.badRequest(response);
      }

    });
  }

  badRequest(response){

    response.write("Page Not Found");
    response.end();

  }

  // checkMatch(requestUrl, Url){

  //   let r = requestUrl.split('/').splice(1);
  //   let u = Url.split('/').splice(1);

  //   if(r.length == u.length){

  //     for(let i = 0; i < r.length; i++){

  //       if(!u[i].includes(':') && r[i] != u[i]){

  //         return false;
  //       }

  //     }

  //     return true;

  //   }else{

  //     return false;
  //   }

  // }
}

module.exports = CustomExpress;