var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.set('views',__dirname+'/views');

exports.app=app;
