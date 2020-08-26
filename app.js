var express = require('express');
var https = require('https');

var port = 5000;
var PORT = process.env.PORT || 4000;
var HOST = process.env.HOST || '';

var app = express();
var server = app.listen(port);

app.use(express.static('public'));

if (server) {
  console.log(" ");
  console.log("----------------------------------");
  console.log("http  server running at port: " + port);
}