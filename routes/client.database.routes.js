// *** FASE DE TESTES AINDA *** \\

// --- CLIENT ROUTES --- \\
// CheckLogin data
global.app.post('/checkLogin', function(req, res) {
    global.functions.echoDir("/checkLogin");

    // Checks login credentials
    global.clientGetCredentialsController.checkLogin(req, res);
});

// -- Users -- \\
// Register new User
global.app.post('/regSave', function(req, res) {
    global.functions.echoDir("/regSave");

    global.clientSaveUserController.saveUser(req, res);
});

// Get Users
global.app.post('/getUser', function(req, res) {
    global.functions.echoDir("/getUser");

    // Save new User
    global.clientGetUserController.getUser(req, res);
});

// -- Vehicles -- \\
// Save a new Vehicle
global.app.post('/saveVehicle', function(req, res) {
    global.functions.echoDir("/saveVehicle");

    // Save new Vehicle
    global.clientSaveVehicleController.saveVehicle(req, res);
});

// Change Vehicle
global.app.post('/changeCar', function(req, res) {
    global.functions.echoDir("/changeCar");

    // Save new User
    global.clientEditCarController.changeCar(req, res);
});

// -- Profile -- \\
// Change Email
global.app.post('/changeEmail', function(req, res) {
    global.functions.echoDir("/changeEmail");

    // Save new User
    global.clientEditEmailController.changeEmail(req, res);
});

// Change Password
global.app.post('/changePassword', function(req, res) {
    global.functions.echoDir("/changePassword");

    // Save new User
    global.clientEditPasswordController.changePassword(req, res);
});

// -- Parks -- \\
// Book a place
global.app.post('/bookPlace', function(req, res) {
    global.functions.echoDir("/bookPlace");

    // Book place
    global.clientEditParkController.bookPlace(req, res);
})

// leavePark
global.app.post('/leavePark', function(req, res) {
    global.functions.echoDir("/leavePark");

    // leavePark
    global.clientDeleteUserParkedController.leavePark(req, res);
});

// Search for a park
global.app.post('/lookForPark', function(req, res) {
    global.functions.echoDir("/lookForPark");

    global.clientGetParkController.lookForPark(req, res, req.body.parkName);
})

// -- Brands -- \\
// Get Brand pic 
global.app.post('/getBrandPic', function(req, res) {
    global.functions.echoDir("/getBrandPic");

    global.clientGetBrandPicController.getBrandPic(req, res);
})