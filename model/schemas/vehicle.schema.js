// Schema variable
var Schema = global.mongoose.Schema;

// Veiculo
var vehicleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    nPlate: {
        type: String,
        unique: true
    },
    model: {
        type: Schema.Types.ObjectId,
        ref: 'Model'
    },
    fuelType: String
});

// Criar modelos
var Vehicle = global.mongoose.model('Vehicles', vehicleSchema);

// Exportar model
module.exports = {
    mgVehicle: Vehicle
};