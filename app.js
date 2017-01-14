/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var fs = require('fs');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'superiorprogrammersonzxce' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

var pool = require('./modules/mysqlconnector.js');
var route = require('./modules/auth.js')(app, pool, fs);
var find_friends = require('./modules/find_friends.js')(app, pool);
var profile_route = require('./modules/profile_routes.js')(app, pool, fs)
var book = require('./modules/book.js')(app, pool, fs);
var messages = require('./modules/messages.js')(app, pool);

app.get('/*.png', function(req, res){
	res.end("0");
});
app.all('/*', function(req, res){
    res.sendfile('./public/index.html');
});

