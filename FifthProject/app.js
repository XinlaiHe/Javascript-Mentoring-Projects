var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '2mb'}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get("/api/photo", function(req, res){

  fs.readFile("photo.json", 'utf8', function(err, result){
    var photo = JSON.parse(result);
    if(err) console.log(err);
    else res.json(photo);
  })
});

app.post("/api/photo", function(req, res){
  fs.readFile("photo.json", function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var pho = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newPho = {
      id: Date.now(),
      author: req.body.author,
      name: req.body.name,
      img: req.body.img
    };
    pho.push(newPho);
    fs.writeFile("photo.json", JSON.stringify(pho, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(pho);
    });
  });
});

app.get("/api/photo/:id", function(req, res){
  var id = req.params.id;
  fs.readFile("photo.json", 'utf8', function(err, result){
    var photo = JSON.parse(result);
    if(err) console.log(err);
    else{
      photo.forEach(function(el){
        if(el._id == id){
          res.json(el);
        }
      });
    }
  })
});

app.put("/api/photo/:id", function(req, res){

});

app.delete("/api/photo/:id", function(req, res){

});

app.listen(9999, function(){
  console.log("server starts at 9999");
});