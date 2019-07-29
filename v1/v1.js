var express = require('express');
var path = require('path');
var app = express();

app.use('/v1/app/klaytnsori', require('v1/klaytnsori.js'));

module.exports = v1;
