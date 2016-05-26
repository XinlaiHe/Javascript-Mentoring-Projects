'use strict';
const Express = require('./src/CustomExpress.js');

let express = new Express();

express.listen(8080, function(){

  console.log("hello world");
});