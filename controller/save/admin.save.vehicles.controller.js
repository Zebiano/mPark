// Save Personal Vehicles
function saveVehicle(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgVeiculo()
        var newVeiculo = new global.vehicleSchema.mgVehicle({
            user: req.body.userId,
            nPlate: req.body.numberPlate,
            model: req.body.modelId,
            fuelType: req.body.fuelType
        });

        // Save Veiculo
        newVeiculo.save(function(err) {
            if (err) {
                global.functions.echoDbError("Vehicle", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Vehicle", "saved");

                // Save Vehicle to user
                saveVehicleInUser(req.body.userId, newVeiculo);
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
            global.functions.echoDbError("User", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("User", "edited");
        }
    });
}

// Export modules
module.exports = {
    saveVehicle: saveVehicle
};
