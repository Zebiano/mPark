// Delete Brand
function deleteBrand(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Delete Brand
        global.brandSchema.mgBrand.findByIdAndRemove({ _id: req.body.brandId }, function(err) {
            if (err) {
                global.functions.echoDbError("Brand", "deleting");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Brand", "deleted");
            }
        });
    };
}

// Export Module
module.exports = {
    deleteBrand: deleteBrand
}
