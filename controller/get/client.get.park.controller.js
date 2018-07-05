// Get User list
function lookForPark(req, res, parkName) {
    console.log("nome " + parkName)
    // Search all Users
    global.parkSchema.mgPark.find({ name: parkName }, function(err, park) {
        console.log(park)
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send Park to client
            //console.log(park.lat)
            //console.log(park.lon)
            res.send(park);
        }
    });
}

// Export Module
module.exports = {
    lookForPark: lookForPark
}
