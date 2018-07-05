function getBrandPic(req, res) {
    if (req.body.user.vehicles) {
        // Search all Vehicles
        global.vehicleSchema.mgVehicle.findById({ _id: req.body.user.vehicles[0] }, function(err, vehicle) {
            if (err) {
                console.log("Error: " + err);
            }
            else {
                //console.log(vehicle);

                // Search all Models
                global.modelSchema.mgModel.findById({ _id: vehicle.model }, function(err, model) {
                    if (err) {
                        console.log("Error: " + err);
                    }
                    else {
                        //console.log(model);

                        // Search all Brands
                        global.brandSchema.mgBrand.findById({ _id: model.brand }, function(err, brand) {
                            if (err) {
                                console.log("Error: " + err);
                            }
                            else {
                                //console.log(brand);

                                // Send Brand
                                res.send(brand);
                            }
                        });
                    }
                });
            }
        });
    }
    else {
        console.log("User has no Vehicles. Cant Show vehicle image!");
        //res.send("img/brands/none.jpg");
    }
}

module.exports = {
    getBrandPic: getBrandPic
}
