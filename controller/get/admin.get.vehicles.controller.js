// Get Vehicle list
function getListVehicles(req, res) {
    // Search all Vehicles
    global.vehicleSchema.mgVehicle.find({}, function(err, vehicles) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send Vehicles to client
            res.send(vehicles);
        }
    });
}

// Export Module
module.exports = {
    getListVehicles: getListVehicles
}