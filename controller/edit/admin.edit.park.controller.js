// Edit park
function editPark(req, res) {
    // New mgPark()
    var nTotal = parseInt(req.body.lugaresNormal) + parseInt(req.body.lugaresGravida) + parseInt(req.body.lugaresDebelitado);
    var newPark = new global.parkSchema.mgPark({
        _id: req.body.id,
        name: req.body.parkLot,
        placesNormal: req.body.lugaresNormal,
        placesPregnant: req.body.lugaresGravida,
        placesDisabled: req.body.lugaresDebelitado,
        placesTotal: nTotal,
        placesFreeNormal: req.body.lugaresNormal,
        placesFreePregnant: req.body.lugaresGravida,
        placesFreeDisabled: req.body.lugaresDebelitado,
        placesFreeTotal: nTotal,
        lat: req.body.latitude,
        lon: req.body.longitude
    });

    global.parkSchema.mgPark.findOneAndUpdate({ _id: req.body.id }, newPark, function(err) {
        if (err) {
            global.functions.echoDbError("Park", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("Park", "edited");
        }
    });
}


// Export Module
module.exports = {
    editPark: editPark
}
