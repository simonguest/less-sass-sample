var express = require('express');
var app = express();

app.use(function(req, res, next){
  console.log(req.path);
  next();
});

app.use(express.static(__dirname + '/pages'));

var server = app.listen(4000, function () {
  console.log('Listening on port %d', server.address().port);
});