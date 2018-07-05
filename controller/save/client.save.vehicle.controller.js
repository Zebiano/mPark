// Save Personal Vehicles
function saveVehicle(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        if (req.body.newVehicle.user) {
            console.log("User through req.body");
            // New mgVeiculo()
            var newVeiculo = new global.vehicleSchema.mgVehicle({
                user: req.body.newVehicle.user,
                nPlate: req.body.newVehicle.nPlate,
                model: req.body.newVehicle.model,
                fuelType: req.body.newVehicle.fuelType
            });
        }
        else {
            console.log("User through req.session");
            // New mgVeiculo()
            var newVeiculo = new global.vehicleSchema.mgVehicle({
                user: req.session.user._id,
                nPlate: req.body.newVehicle.nPlate,
                model: req.body.newVehicle.model,
                fuelType: req.body.newVehicle.fuelType
            });
        }

        // Save Veiculo
        newVeiculo.save(function(err) {
            if (err) {
                global.functions.echoDbError("Vehicle", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Vehicle", "saved");

                if (req.body.newVehicle.user) {
                    console.log("If worked! Saving vehicle id to user.")
                    // Save Vehicle to user
                    saveVehicleInUser(req.body.newVehicle.user, newVeiculo._id);
                } else {
                    // Save Vehicle to user
                    saveVehicleInUser(req.session.user._id, newVeiculo._id);
                }
                
                res.end('{"success" : "Updated Successfully", "status" : 200}');
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

// Save vehicles as well in User.vehicles
function saveVehicleInUser(userId, newVehicle) {
    // Update User with vehicle
    global.userSchema.mgUser.findOneAndUpdate({ _id: userId }, { $push: { vehicles: newVehicle._id } }, function(err) {
        if (err) {
            global.functions.echoDbError("User", "adding vehicle to new");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("User", "added vehicle to new");
        }
    });
}

// Export modules
module.exports = {
    saveVehicle: saveVehicle
};
