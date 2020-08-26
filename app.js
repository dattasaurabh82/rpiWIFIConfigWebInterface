var express = require('express');
var fs = require('fs-extra');

var HTTP_PORT = 4000;

var app = express();
var server = app.listen(HTTP_PORT);

app.use(express.static('public'));


if (server) {
  console.log("\nhttp  server running at port: " + HTTP_PORT);
}