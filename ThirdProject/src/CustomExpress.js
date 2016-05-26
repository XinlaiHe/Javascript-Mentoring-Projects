'use strict';
const http = require('http');

class CustomExpress{

  constructor(){

    this.server = http.createServer();

  }

  use(){

  }

  get(){

  }

  post(){

  }

  put(){

  }

  delete(){

  }

  listen(port, callback) {

    this.server.listen(port);
    callback();
  }
}

module.exports = CustomExpress;