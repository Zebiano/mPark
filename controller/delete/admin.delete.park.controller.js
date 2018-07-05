// Delete Park
function deletePark(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Delete Park
        global.parkSchema.mgPark.findByIdAndRemove({ _id: req.body.parkId }, function(err) {
            if (err) {
                global.functions.echoDbError("Park", "deleting");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Park", "deleted");
            }
        });
    };
}

// Export Module
module.exports = {
    deletePark: deletePark
}
