var express = require('express');
var path = require('path');
var app = express();

app.use('/v1/app/klaytnsori/membership', require('v1/klaytnsori/membership.js'));
app.use('/v1/app/klaytnsori/question', require('v1/klaytnsori/question.js'));
app.use('/v1/app/klaytnsori/mypage', require('v1/klaytnsori/mypage.js'));

module.exports = klaytnsori;
