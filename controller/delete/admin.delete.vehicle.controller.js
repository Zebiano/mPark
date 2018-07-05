// Delete Vehicle
function deleteVehicle(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Delete Vehicle
        global.vehicleSchema.mgVehicle.findByIdAndRemove({ _id: req.body.vehicleId }, function(err, vehicle) {
            if (err) {
                global.functions.echoDbError("Vehicle", "deleting");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Vehicle", "deleted");
                deleteVehicleFromUser(req.body.vehicleId, vehicle.user);
            }
        });
    };
}

// Delete vehicle from user
function deleteVehicleFromUser(vehicleId, vehicleUser) {
    // Update User with vehicle
    global.userSchema.mgUser.findOneAndUpdate({ _id: vehicleUser }, { $pull: { vehicles: vehicleId } }, function(err) {
        if (err) {
            global.functions.echoDbError("User", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("User", "edited");
        }
    });
}

// Export Module
module.exports = {
    deleteVehicle: deleteVehicle
}
