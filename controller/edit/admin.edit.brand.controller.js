// Edit Brand
function editBrand(req, res) {
    // New mgBrand()
    var newBrand = new global.brandSchema.mgBrand({
        _id: req.body.id,
        name: req.body.name
    });

    global.brandSchema.mgBrand.findOneAndUpdate({ _id: req.body.id }, newBrand, function(err) {
        if (err) {
            global.functions.echoDbError("Brand", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("Brand", "edited");
        }
    });
}


// Export Module
module.exports = {
    editBrand: editBrand
}
