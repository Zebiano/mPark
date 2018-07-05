// Get Brand list
function getListBrand(req, res) {
    // Search all Brands
    global.brandSchema.mgBrand.find({}, function(err, brands) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send brands to client
            res.send(brands);
        }
    });
}

// Get Models list
function getListModel(req, res) {
    // Search all Models
    global.modelSchema.mgModel.find({}, function(err, models) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send brands to client
            res.send(models);
        }
    });
}

// Get one Model list
function getListOneModel(req, res, brandId) {
    // Search specific Model of the brand
    global.modelSchema.mgModel.find({ brand: brandId }, function(err, models) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            console.log("models: " + models);

            // Send brands to client
            res.send(models);
        }
    });
}

// Export Module
module.exports = {
    getListBrand: getListBrand,
    getListModel: getListModel,
    getListOneModel: getListOneModel
}
