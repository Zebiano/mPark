// *** FASE DE TESTES AINDA *** \\

// --- ADMIN ROUTES --- \\

// -- Save -- \\
// Users
global.app.post('/admin/saveUser', function(req, res) {
    global.functions.echoDir("/admin/saveUser");

    // Save new User
    global.adminDatabaseController.saveUser(req, res);
});

// Personal Vehicles
global.app.post('/admin/saveVehicle', function(req, res) {
    global.functions.echoDir("/admin/savevehicle");

    // Save new Personal vehicle
    global.adminDatabaseController.saveVehicle(req, res);
});

// Brands and Models
global.app.post('/admin/saveBm', function(req, res) {
    global.functions.echoDir("/admin/saveBm");

    // Save new Brand and/or Model
    global.adminDatabaseController.saveBm(req, res);
});

// -- Edit -- \\


// -- Delete -- \\
