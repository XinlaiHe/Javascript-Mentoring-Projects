'use strict';
const Express = require('./src/CustomExpress.js');
​
let express = new Express();
​
express.listen(8080, function(){
​
  console.log("Server starts at " + 8080);
});
​
express.get('/', function(req, res){
​
  res.send("Home page");
})
​
express.get('/lists', function(req, res){
​
    res.send("hi, this lists page");
})
​
express.get('/lists/:id', function(req, res){
​
    res.send("hi, lists id : " + req.params.id);
})
​
express.get('/users', function(req, res){
​
    res.send("hi, this is users page");
})
​
express.get('/users/:id', function(req, res){
​
    res.send("hi, users id : " + req.params.id);
})