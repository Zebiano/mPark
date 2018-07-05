// Change Car
function changeCar(req, res) {
    console.log(req.session.user.vehicles.length);

    if (req.session.user.vehicles.length == 0) {
        // New mgVeiculo()
        var newVeiculo = new global.vehicleSchema.mgVehicle({
            user: req.session.user._id,
            nPlate: req.body.newVehicle.nPlate,
            model: req.body.newVehicle.model,
            fuelType: req.body.newVehicle.fuelType
        });

        // Save Veiculo
        newVeiculo.save(function(err) {
            if (err) {
                global.functions.echoDbError("Vehicle", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Vehicle", "saved");
                
                saveVehicleInUser(req.session.user._id, newVeiculo._id);

                res.end('{"success" : "Updated Successfully", "status" : 200}');
            }
        });
    }
    else {
        global.vehicleSchema.mgVehicle.findByIdAndUpdate(req.session.user.vehicles[0], req.body.newVehicle, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                res.end('{"success" : "Updated Successfully", "status" : 200}');
            }
        });
    }
}

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

// Export Module
module.exports = {
    changeCar: changeCar
}
