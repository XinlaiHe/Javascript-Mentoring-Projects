'use strict';
const Express = require('./src/CustomExpress.js');

let express = new Express();

express.listen(8080, function(){

  console.log("hello world");
});

express.get('/lists', function(req, res){

    res.send("hi, list");
})

express.get('/lists/:id', function(req, res){

    res.send("hi, list id : " + req.params.id);
})

express.get('/users', function(req, res){

    res.send("hi, users");
})

express.get('/users/:id', function(req, res){

    res.send("hi, users id : " + req.params.id);
})