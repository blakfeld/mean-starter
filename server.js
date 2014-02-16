/**
 * Server.js - Express Server
 */

var express     = require('express');
var mongoose    = require('mongoose');

/**
 * Init
 */

var app         = express();

/**
 * Configuration
 */

// Config File
var database    = require('./config/database');

// Port
var port        = process.env.PORT || 3000;

// Express
app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

/**
 * Routes
 */

require('./app/routes')(app);

/**
 * Start App
 */

app.listen(port);
console.log("Express listening on port " + port);

/**
 * Expose Express App Object
 * @type {Object} app - Express Object
 */

exports = module.expres = app;