// Save Brand
function saveBrand(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgBrand()
        var newBrand = new global.brandSchema.mgBrand({
            name: req.body.name
        });

        // Check if Brand already exists in dataBase
        global.brandSchema.mgBrand.findOne({ name: req.body.name }, function(err, brand) {
            // Error
            if (err) {
                global.functions.echoDbError("Brand", "finding");
                console.log(err);
            }
            // If Brand doesnt exist
            else if (brand == null) {
                global.functions.echoDbMissing("Brand");

                // Save Brand
                newBrand.save(function(err) {
                    if (err) {
                        global.functions.echoDbError("Brand", "saving");
                        console.log(err);
                    }
                    else {
                        global.functions.echoDbSuccess("Brand", "saved");
                    }
                });
            }
            // Brand exists
            else {
                global.functions.echoDbExists("Brand");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
}

// Export modules
module.exports = {
    saveBrand: saveBrand
};
