'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();
    this.routes = [];
  }

  use(middleware){

  }

  get(url, handler){

    if(this.routes.indexOf(url) > 0){

      return;

    }else{

      this.routes.push(url);
      this.server.on('request', (request, response) => {


        if(request.method == 'GET' && url.includes('/:')){

          if(this.checkMatch(request.url, url)){

            let a = request.url.split('/').splice(1);
            let b = url.replace(/:/g, "").split('/').splice(1);
            let _params = {};

            for(let i = 0; i < a.length; i++){

              _params[b[i]] = a[i];

            }
            request.params = _params;
            response.send = (str) => {

              response.write(str);
              response.end();
            };

            handler(request, response);

          }else{

            // response.statusCode = 404;
            // response.end();
            // this.badRequest(response);
          }

        }else if(request.method == 'GET' && request.url == url){

          request.params = {};
          response.send = (str) => {

            response.write(str);
            response.end();
          };

          handler(request, response);

        }else{

          // this.badRequest(response);
          // response.statusCode = 404;
          // response.end();
        }

      });
    }
  }

  post(url, handler){

  }

  put(url, handler){

  }

  delete(url, handler){

  }

  listen(port, callback) {

    this.server.listen(port);
    callback();
  }

  badRequest(res){

    res.write("Page Not Found");
    res.end();

  }

  checkMatch(requestUrl, Url){

    let r = requestUrl.split('/').splice(1);
    let u = Url.split('/').splice(1);

    if(r.length == u.length){

      for(let i = 0; i < r.length; i++){

        if(!u[i].includes(':') && r[i] != u[i]){

          return false;
        }

      }

      return true;

    }else{

      return false;
    }

  }
}

module.exports = CustomExpress;