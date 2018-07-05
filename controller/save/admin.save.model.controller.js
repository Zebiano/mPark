// Save Model
function saveModel(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgModel()
        var newModel = new global.modelSchema.mgModel({
            brand: req.body.brandId,
            name: req.body.name
        });

        // Check if model already exists in dataBase
        global.modelSchema.mgModel.findOne({ name: req.body.name }, function(err, model) {
            // Error
            if (err) {
                global.functions.echoDbError("Model", "finding");
                console.log(err);
            }
            // If Model doesnt exist
            else if (model == null) {
                global.functions.echoDbMissing("Model");

                // Search for the _id of the sent Brand
                global.brandSchema.mgBrand.findOne({ name: req.body.brandId }, function(err2, brand) {
                    if (err2) {
                        global.functions.echoDbError("Brand", "finding _id");
                        console.log(err);
                    }
                    else {
                        // Save Model
                        newModel.save(function(err3) {
                            if (err3) {
                                global.functions.echoDbError("Model", "saving");
                                console.log(err3);
                            }
                            else {
                                global.functions.echoDbSuccess("Model", "saved");
                            }
                        });
                    }
                });
            }
            // Model exists
            else {
                global.functions.echoDbExists("Model");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
}

// Export modules
module.exports = {
    saveModel: saveModel
};
