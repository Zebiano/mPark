// Delete user
function deleteUser(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // First delete users vehicles, if he has any
        global.userSchema.mgUser.findById({ _id: req.body.userId }, function(err, user) {
            if (err) {
                global.functions.echoDbError("User", "finding");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("User", "found");

                // User has vehicles
                if (user.vehicles.length != 0) {
                    console.log("User has vehicles");

                    for (var i = 0; i < user.vehicles.length; i++) {
                        // Delete Vehicle
                        global.vehicleSchema.mgVehicle.findByIdAndRemove({ _id: user.vehicles[i] }, function(err, vehicle) {
                            if (err) {
                                global.functions.echoDbError("Vehicle", "deleting");
                                console.log(err);
                            }
                            else {
                                global.functions.echoDbSuccess("Vehicle", "deleted");
                            }
                        });
                    }
                }
                // Then Delete User
                global.userSchema.mgUser.findByIdAndRemove({ _id: req.body.userId }, function(err) {
                    if (err) {
                        global.functions.echoDbError("User", "deleting");
                        console.log(err);
                    }
                    else {
                        global.functions.echoDbSuccess("User", "deleted");
                    }
                });
            }
        });
    };
}

// Export Module
module.exports = {
    deleteUser: deleteUser
}
