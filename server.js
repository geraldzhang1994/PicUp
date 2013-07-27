var http = require("http");
var connect = require('connect');
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public/"));
app.use(app.router);

app.listen(process.env.PORT || 3000);

console.log('server running on 3000');
