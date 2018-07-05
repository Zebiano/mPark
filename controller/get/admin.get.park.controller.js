// Get Park list
function getListParks(req, res) {
    // Search all Parks
    global.parkSchema.mgPark.find({}, function(err, parks) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send Parks to client
            res.send(parks);
        }
    });
}

// Export Module
module.exports = {
    getListParks: getListParks
}