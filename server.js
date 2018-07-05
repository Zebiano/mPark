// --- Requires --- \\
var express = require('express');
var mongodb = require('mongodb');
var colors = require('colors');
global.mustacheExpress = require('mustache-express');
global.bodyParser = require('body-parser');
global.fs = require('fs');
global.mongoose = require('mongoose');
global.bcrypt = require('bcrypt-nodejs');
global.session = require('express-session');

// --- Variables --- \\
var port = process.env.PORT;
// --- Global Variables --- \\
global.dbState = false;
// MongoDB
global.mongoClient = mongodb.MongoClient;

// --- Server --- \\
global.app = express();

// -- Middleware -- \\
// Body-parser
global.app.use(global.bodyParser.json(), global.bodyParser.urlencoded({ extended: true }));
// Template engine
global.app.engine('html', global.mustacheExpress());
global.app.set('view engine', 'html');
global.app.set('views', __dirname + '/views');
// Express Sessions
global.app.use(global.session({
    secret: 'mPark',
    saveUninitialized: false,
    resave: false
}));

// Static folders
global.app.use(express.static(__dirname + '/public'));

// --- Requires: MVC --- \\
// -- Assets -- \\
var connect = require('./assets/connect.js');

// -- Controller -- \\
// - Save - \\
global.adminSaveParkingController = require('./controller/save/admin.save.park.controller.js');
global.adminSaveUsersController = require('./controller/save/admin.save.user.controller.js');
global.adminSaveVehiclesController = require('./controller/save/admin.save.vehicles.controller.js');
global.adminSaveBrandController = require('./controller/save/admin.save.brand.controller.js');
global.adminSaveModelController = require('./controller/save/admin.save.model.controller.js');
global.clientSaveUserController = require('./controller/save/client.save.user.controller.js');
global.clientSaveVehicleController = require('./controller/save/client.save.vehicle.controller.js');

// - Edit - \\
global.adminEditParksController = require('./controller/edit/admin.edit.park.controller.js');
global.adminEditUsersController = require('./controller/edit/admin.edit.user.controller.js');
global.adminEditVehiclesController = require('./controller/edit/admin.edit.vehicle.controller.js');
global.adminEditBrandsController = require('./controller/edit/admin.edit.brand.controller.js');
global.adminEditModelsController = require('./controller/edit/admin.edit.model.controller.js');
global.clientEditParkController = require('./controller/edit/client.edit.park.controller.js');
global.clientEditCarController = require('./controller/edit/client.edit.car.controller.js');
global.clientEditEmailController = require('./controller/edit/client.edit.email.controller.js');
global.clientEditPasswordController = require('./controller/edit/client.edit.password.controller.js');

// - Delete - \\
global.adminDeleteParksController = require('./controller/delete/admin.delete.park.controller.js');
global.adminDeleteUsersController = require('./controller/delete/admin.delete.user.controller.js');
global.adminDeleteVehiclesController = require('./controller/delete/admin.delete.vehicle.controller.js');
global.adminDeleteBrandsController = require('./controller/delete/admin.delete.brand.controller.js');
global.adminDeleteModelsController = require('./controller/delete/admin.delete.model.controller.js');
global.clientDeleteUserParkedController = require('./controller/delete/client.delete.user.parked.controller.js');

// - Get - \\
global.adminGetParkingController = require('./controller/get/admin.get.park.controller.js');
global.adminGetUsersController = require('./controller/get/admin.get.user.controller.js');
global.adminGetVehiclesController = require('./controller/get/admin.get.vehicles.controller.js');
global.adminGetBmController = require('./controller/get/admin.get.bm.controller.js');
global.clientGetParkController = require('./controller/get/client.get.park.controller.js');
global.clientGetUserController = require('./controller/get/client.get.user.controller.js');
global.clientGetCredentialsController = require('./controller/get/client.get.credentials.controller.js');
global.clientGetBrandPicController = require('./controller/get/client.get.brandPic.controller.js');

// -- Routes -- \\
var adminRoutes = require('./routes/admin.routes.js');
var adminDatabaseRoutes = require('./routes/admin.database.routes.js');
var clientDatabaseRoutes = require('./routes/client.database.routes.js');
var mainRoutes = require('./routes/main.routes.js');
var testsRoutes = require('./routes/tests.routes.js');

// -- Model -- \\
global.testMgoose = require('./model/test/test.mongoose.js');

// - Schemas - \\
global.brandSchema = require('./model/schemas/brand.schema.js');
global.modelSchema = require('./model/schemas/model.schema.js');
global.userSchema = require('./model/schemas/user.schema.js');
global.vehicleSchema = require('./model/schemas/vehicle.schema.js');
global.parkSchema = require('./model/schemas/park.schema.js');

// --- Public --- \\
global.functions = require('./public/js/functions.js');

// --- Listen to port --- \\
global.app.listen(port, function() {
    console.log("App running on: https://ea7-cfportela.c9users.io");
    console.log("---");
});
