'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();

  }

  use(middleware){

  }

  get(url, handler){

    this.server.on('request', (request, response) => {


      if(request.method == 'GET' && url.includes('/:')){

        let a = request.url.split('/').splice(1);
        let b = url.replace(/:/g, "").split('/').splice(1);

        if(a.length == b.length && a[0] == b[0]){

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
          //this.badRequest(response);
        }

      }else if(request.method == 'GET' && request.url == url){

        request.params = {};
        response.send = (str) => {

          response.write(str);
          response.end();
        };

        handler(request, response);

      }else{

        //this.badRequest(response);
        // response.statusCode = 404;
        // response.end();
      }

    });
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

  private badRequest(res){

    res.write("Page Not Found");
    res.end();
  }
  private checkMatch(a, b){

  }
}

module.exports = CustomExpress;