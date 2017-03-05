
var express = require('express');
var app = express();
var mongoose = require( 'mongoose' );
debugger;
var mlabDb = "mongodb://127.0.0.1:27017/cybersipahi";
global.db = (global.db ? global.db : mongoose.connect(mlabDb));

