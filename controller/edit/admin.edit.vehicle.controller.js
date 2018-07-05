// Edit Vehicle
function editVehicle(req, res) {
    console.log(req.body);
    // New mgVehicle()
    var newVehicle = new global.vehicleSchema.mgVehicle({
        _id: req.body.id,
        user: req.body.userId,
        nPlate: req.body.numberPlate,
        model: req.body.modelId,
        fuelType: req.body.fuelType
    });

    global.vehicleSchema.mgVehicle.findOneAndUpdate({ _id: req.body.id }, newVehicle, function(err) {
        if (err) {
            global.functions.echoDbError("Vehicle", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("Vehicle", "edited");
        }
    });
}

// Export Module
module.exports = {
    editVehicle: editVehicle
}
