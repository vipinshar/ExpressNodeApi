
var express = require('express');
var app = express();
var mongoose = require( 'mongoose' );
var mlabDb = "mongodb://vipin:Vipin@123>@ds139288.mlab.com:39288/crud"; //"mongodb://127.0.0.1:27017/cybersipahi";
global.db = ( global.db ? global.db : mongoose.connect( mlabDb ) );

var conn = mongoose.connection;

conn.on( 'error', console.error.bind( console, 'connection error:' ) );

conn.once( 'open', function () { console.log( "Great success!" ) });
