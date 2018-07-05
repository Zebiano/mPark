// Delete Model
function deleteModel(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Delete Model
        global.modelSchema.mgModel.findByIdAndRemove({ _id: req.body.modelId }, function(err) {
            if (err) {
                global.functions.echoDbError("Model", "deleting");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Model", "deleted");
            }
        });
    };
}

// Export Module
module.exports = {
    deleteModel: deleteModel
}
