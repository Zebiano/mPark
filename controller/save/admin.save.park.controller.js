// Save Parking Lots
function savePark(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // New mgPark()
        var nTotal = parseInt(req.body.lugaresNormal) + parseInt(req.body.lugaresGravida) + parseInt(req.body.lugaresDebelitado)
        var newPark = new global.parkSchema.mgPark({
            name: req.body.parkLot,
            placesNormal: req.body.lugaresNormal,
            placesPregnant: req.body.lugaresGravida,
            placesDisabled: req.body.lugaresDebelitado,
            placesTotal: nTotal,
            placesFreeNormal: req.body.lugaresNormal,
            placesFreePregnant: req.body.lugaresGravida,
            placesFreeDisabled: req.body.lugaresDebelitado,
            placesFreeTotal:nTotal,
            lat: req.body.latitude,
            lon: req.body.longitude
        });

        // Save Park
        newPark.save(function(err) {
            if (err) {
                global.functions.echoDbError("Park", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("Park", "saved");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

// Export modules
module.exports = {
    savePark: savePark
};
