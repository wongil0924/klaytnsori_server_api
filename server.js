var express = require('express');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

/*
//database
var klaytnsoridb = mysql.createConnection({
  host : 'klaytn-database.ciitcrpahoo9.ap-northeast-2.rds.amazonaws.com',
  user : 'admin',
  password : '12345678',
  database : 'klaytndb',
  port : 3306
});
*/
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//API
app.use('/v1',require('v1.js'));

//server
app.listen(3000, function(){
  console.log('Server is running...');
});
