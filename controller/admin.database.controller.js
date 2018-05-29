// -- Save -- \\
// Users
function saveUser(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Admin check
        if (req.body.admin == undefined) {
            req.body.admin = false;
        };

        // VehicleId Check
        if (req.body.vehicleId == "") {
            // New mgUser() without vehicleId
            var newUser = new global.userSchema.mgUser({
                nome: req.body.name,
                email: req.body.email,
                password: req.body.password,
                morada: req.body.adress,
                codPostal: req.body.postalCode1 + "-" + req.body.postalCode2,
                genero: req.body.gender,
                dataNascimento: req.body.dateOfBirth,
                admin: req.body.admin
            });
        }
        else {
            // New mgUser() with vehicleId
            var newUser = new global.userSchema.mgUser({
                nome: req.body.name,
                email: req.body.email,
                password: req.body.password,
                morada: req.body.adress,
                codPostal: req.body.postalCode1 + "-" + req.body.postalCode2,
                genero: req.body.gender,
                dataNascimento: req.body.dateOfBirth,
                veiculos: req.body.vehicleId,
                admin: req.body.admin
            });
        }

        // Save Brand
        newUser.save(function(err) {
            if (err) {
                global.functions.echoDbError("User");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("User");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

// Personal Vehicles
function saveVehicle(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgVeiculo()
        var newVeiculo = new global.vehicleSchema.mgVehicle({
            matricula: req.body.numberPLate,
            modelo: req.body.modelId,
            combustivel: req.body.fuelType
        });

        // Save Brand
        newVeiculo.save(function(err) {
            if (err) {
                global.functions.echoDbError("Vehicle");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Vehicle");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

function saveBm(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgMarca()
        var newMarca = new global.brandSchema.mgBrand({
            nome: req.body.brand
        });

        // Save Brand
        newMarca.save(function(err) {
            if (err) {
                global.functions.echoDbError("Brand");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Brand");
                console.log(newMarca._id);

                // Model
                if (req.body.model != "") {
                    var newModelo = new global.modelSchema.mgModel({
                        marca: newMarca._id,
                        nome: req.body.model
                    });

                    // Save Model
                    newModelo.save(function(err2) {
                        if (err2) {
                            global.functions.echoDbError("Model");
                            console.log(err2);
                        }
                        else {
                            global.functions.echoDbSuccess("Model");
                        }
                    });
                };
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

// -- Edit -- \\


// -- Delete -- \\


// Export modules
module.exports = {
    saveUser: saveUser,
    saveVehicle: saveVehicle,
    saveBm: saveBm
};
