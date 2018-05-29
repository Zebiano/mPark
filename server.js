// --- Requires --- \\
var express = require('express');
var mongodb = require('mongodb');
var colors = require('colors');
global.mustacheExpress = require('mustache-express');
global.bodyParser = require('body-parser');
global.fs = require('fs');
global.mongoose = require('mongoose');

// --- Variables --- \\
var port = process.env.PORT;
// --- Global Variables --- \\
global.dbState = false;

// --- Server --- \\
global.app = express();
global.app.use(global.bodyParser.json(), global.bodyParser.urlencoded({ extended: true }));

// MongoDB
global.mongoClient = mongodb.MongoClient;

// --- Requires: MVC --- \\
// -- Assets -- \\
var connect = require('./assets/connect.js');
// -- Controller -- \\
global.adminDatabaseController = require('./controller/admin.database.controller.js');
// - Routes - \\
var adminRoutes = require('./controller/routes/admin.routes.js');
var adminDatabaseRoutes = require('./controller/routes/admin.database.routes.js');
var clientDatabaseRoutes = require('./controller/routes/client.database.routes.js');
var mainRoutes = require('./controller/routes/main.routes.js');
var testsRoutes = require('./controller/routes/tests.routes.js');
// -- Model -- \\
global.testMgoose = require('./model/test/test.mongoose.js');
// - Schemas - \\
global.brandSchema = require('./model/schemas/brand.schema.js');
global.modelSchema = require('./model/schemas/model.schema.js');
global.userSchema = require('./model/schemas/user.schema.js');
global.vehicleSchema = require('./model/schemas/vehicle.schema.js');

// -- Public -- \\
global.functions = require('./public/js/functions.js');

// Static folders
global.app.use(express.static(__dirname + '/public'));

// Template engine
global.app.engine('html', global.mustacheExpress());
global.app.set('view engine', 'html');
global.app.set('views', __dirname + '/views');

// --- Listen to port --- \\
global.app.listen(port, function() {
    console.log("App running on: https://ea7-cfportela.c9users.io");
    console.log("---");
});
