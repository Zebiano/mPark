// --- ADMIN ROUTES --- \\
// -- Save -- \\
// Park
global.app.post('/admin/savePark', function(req, res) {
    global.functions.echoDir("/admin/savePark");

    // Save new User
    global.adminSaveParkingController.savePark(req, res);
});

// Users
global.app.post('/admin/saveUser', function(req, res) {
    global.functions.echoDir("/admin/saveUser");

    // Save new User
    global.adminSaveUsersController.saveUser(req, res);
});

// Personal Vehicles
global.app.post('/admin/saveVehicle', function(req, res) {
    global.functions.echoDir("/admin/savevehicle");

    // Save new Personal vehicle
    global.adminSaveVehiclesController.saveVehicle(req, res);
});

// Brands
global.app.post('/admin/saveBrand', function(req, res) {
    global.functions.echoDir("/admin/saveBrand");

    // Save new Brand
    global.adminSaveBrandController.saveBrand(req, res);
});
// Models
global.app.post('/admin/saveModel', function(req, res) {
    global.functions.echoDir("/admin/saveModel");

    // Save new Model
    global.adminSaveModelController.saveModel(req, res);
});

// -- Edit -- \\
// Park
global.app.post('/admin/editPark', function(req, res) {
    global.functions.echoDir("/admin/editPark");

    // Edit Park
    global.adminEditParksController.editPark(req, res);
});

// Users
global.app.post('/admin/editUser', function(req, res) {
    global.functions.echoDir("/admin/editUser");

    // Edit User
    global.adminEditUsersController.editUser(req, res);
});

// Personal Vehicles
global.app.post('/admin/editVehicle', function(req, res) {
    global.functions.echoDir("/admin/editVehicle");

    // Edit Vehicle
    global.adminEditVehiclesController.editVehicle(req, res);
});

// Brands
global.app.post('/admin/editBrand', function(req, res) {
    global.functions.echoDir("/admin/editBrand");

    // Edit Brand
    global.adminEditBrandsController.editBrand(req, res);
});

// Models
global.app.post('/admin/editModel', function(req, res) {
    global.functions.echoDir("/admin/editModel");

    // Edit Model
    global.adminEditModelsController.editModel(req, res);
});

// -- Delete -- \\
// Park
global.app.post('/admin/deletePark', function(req, res) {
    global.functions.echoDir("/admin/deletePark");

    // Delete Park
    global.adminDeleteParksController.deletePark(req, res);
});

// Users
global.app.post('/admin/deleteUser', function(req, res) {
    global.functions.echoDir("/admin/deleteUser");

    // Delete User
    global.adminDeleteUsersController.deleteUser(req, res);
});

// Personal Vehicles
global.app.post('/admin/deleteVehicle', function(req, res) {
    global.functions.echoDir("/admin/deleteVehicle");

    // Delete Vehicle
    global.adminDeleteVehiclesController.deleteVehicle(req, res);
});

// Brands
global.app.post('/admin/deleteBrand', function(req, res) {
    global.functions.echoDir("/admin/deleteBrand");

    // Delete User
    global.adminDeleteBrandsController.deleteBrand(req, res);
});

// Models
global.app.post('/admin/deleteModel', function(req, res) {
    global.functions.echoDir("/admin/deleteModel");

    // Delete User
    global.adminDeleteModelsController.deleteModel(req, res);
});

// -- Get -- \\
// Parks
global.app.post('/admin/getListParks', function(req, res) {
    global.functions.echoDir("/admin/getListParks");

    // Get list of Parks
    global.adminGetParkingController.getListParks(req, res);
});

// Users
global.app.post('/admin/getListUsers', function(req, res) {
    global.functions.echoDir("/admin/getListUsers");

    // Get list of Users
    global.adminGetUsersController.getListUsers(req, res);
});

// Personal Vehicles
global.app.post('/admin/getListVehicles', function(req, res) {
    global.functions.echoDir("/admin/getListVehicles");

    // Get list of Vehicles
    global.adminGetVehiclesController.getListVehicles(req, res);
});

// Brands and Models
global.app.post('/admin/getListBrand', function(req, res) {
    global.functions.echoDir("/admin/getListBrand");

    // Get list of Bm
    global.adminGetBmController.getListBrand(req, res);
});

global.app.post('/admin/getListModel', function(req, res) {
    global.functions.echoDir("/admin/getListModel");

    // Get list of Models
    global.adminGetBmController.getListModel(req, res);
});

global.app.post('/admin/getListOneModel', function(req, res) {
    global.functions.echoDir("/admin/getListOneModel");

    // Get list of one Model
    global.adminGetBmController.getListOneModel(req, res, req.body.brandId);
});

