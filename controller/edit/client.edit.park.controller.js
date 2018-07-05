// Edit park place
function bookPlace(req, res) {
    console.log(req.body);

    // req.body format [placeType#_parkId]
    //var info = req.body.placeType.split("#")
    var type = req.body.placeType;
    var id = req.body.parkId;
    // Checks the placeType
    if (type == "normal") {
        // Removes one normal free space and total free space
        global.parkSchema.mgPark.findByIdAndUpdate(id, { $inc: { placesFreeNormal: -1, placesFreeTotal: -1 } }, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                saveParked();
            }
        });
    }
    if (type == "pregnant") {
        // Removes one pregnant free space and total free space
        global.parkSchema.mgPark.findByIdAndUpdate(id, { $inc: { placesFreePregnant: -1, placesFreeTotal: -1 } }, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                saveParked();
            }
        });
    }
    if (type == "disabled") {
        // Removes one disabled free space and total free space
        global.parkSchema.mgPark.findByIdAndUpdate(id, { $inc: { placesFreeDisabled: -1, placesFreeTotal: -1 } }, function(err, user) {
            if (err) {
                console.log(err);
            }
            else {
                saveParked();
            }
        });
    }

    function saveParked() {
        // Mais tarde sera guardada uma key com um array que diz o park e o lugar que o user esta a ocupar
        // Array com a informaçao do parque e lugar que o user vai usar
        var parkPlaced = { parkId: req.body.parkId, placeType: req.body.placeType };
        // Id do user que esta login (apenas para testes, mais tarde vai ser usado o id do user logado)

        global.userSchema.mgUser.findById({ _id: req.session.user._id }, function(err, user) {
            console.log(user.parked.length);
            if (user.parked.length != 0) {
                console.log("ERRO");
            }
            else {
                global.userSchema.mgUser.findOneAndUpdate({ _id: req.session.user._id }, { $push: { parked: parkPlaced } }, function(err, user2) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        global.userSchema.mgUser.findById({ _id: req.session.user._id }, function(err, user3) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("Saved park: " + parkPlaced + " on user: " + req.session.user._id);
                                req.session.user = user3;
                            }
                        });
                    }
                });
            }
        });
    }
}


// Export Module
module.exports = {
    bookPlace: bookPlace
}
