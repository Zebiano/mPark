// Edit Model
function editModel(req, res) {
    // New mgModel()
    var newModel = new global.modelSchema.mgModel({
        _id: req.body.modelId,
        brand: req.body.brandId,
        name: req.body.name
    });

    global.modelSchema.mgModel.findOneAndUpdate({ _id: req.body.modelId }, newModel, function(err) {
        if (err) {
            global.functions.echoDbError("Model", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("Model", "edited");
        }
    });
}

// Export Module
module.exports = {
    editModel: editModel
}
