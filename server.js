var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app=express();
var db = require('./config/db');
// set our port
var port = process.env.PORT || 9005; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect(db.url,{ useMongoClient: true },function(err){
	if (err) throw err;
      console.log("Database created!");
}); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

require('./app/routes.js')(app);

app.listen(port);
console.log('Magic happens on port ' + port);       
exports = module.exports = app;  
