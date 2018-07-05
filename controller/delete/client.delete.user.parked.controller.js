// Leave Park
function leavePark(req, res) {
    // Check if database is reachable
    global.userSchema.mgUser.findOne({ _id: req.session.user._id }, function(err, user) {
        if (err) {
            console.log(err);
        }
        else {
            var type = user.parked[0].placeType; //placeType
            var parkId = user.parked[0].parkId; // parkId
            console.log("Type: " + type + ". ParkId: " + parkId);

            // Checks the placeType
            if (type == "normal") {
                // Removes one normal free space and total free space
                global.parkSchema.mgPark.findByIdAndUpdate(parkId, { $inc: { placesFreeNormal: 1, placesFreeTotal: 1 } }, function(err, park) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.userSchema.mgUser.findByIdAndUpdate({ _id: user._id }, { $set: { parked: [] } }, function(err, user2) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("Removed user from park.");
                                req.session.user = user2;
                                res.end('{"success" : "Updated Successfully", "status" : 200}');
                            }
                        });
                    }
                });
            }
            if (type == "pregnant") {
                // Removes one pregnant free space and total free space
                global.parkSchema.mgPark.findByIdAndUpdate(parkId, { $inc: { placesFreePregnant: 1, placesFreeTotal: 1 } }, function(err, park) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.userSchema.mgUser.findByIdAndUpdate({ _id: user._id }, { $set: { parked: [] } }, function(err, user2) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("Removed user from park.");
                                req.session.user = user2;
                                res.end('{"success" : "Updated Successfully", "status" : 200}');
                            }
                        });
                    }
                });
            }
            if (type == "disabled") {
                // Removes one disabled free space and total free space
                global.parkSchema.mgPark.findByIdAndUpdate(parkId, { $inc: { placesFreeDisabled: 1, placesFreeTotal: 1 } }, function(err, park) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.userSchema.mgUser.findByIdAndUpdate({ _id: user._id }, { $set: { parked: [] } }, function(err, user2) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("Removed user from park.");
                                req.session.user = user2;
                                res.end('{"success" : "Updated Successfully", "status" : 200}');
                            }
                        });
                    }
                });
            }
        }
    });
}

// Export Module
module.exports = {
    leavePark: leavePark
}
