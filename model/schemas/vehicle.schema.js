// Schema variable
var Schema = global.mongoose.Schema;

// Veiculo
var vehicleSchema = new Schema({
    matricula: String,
    modelo: {
        type: Schema.Types.ObjectId,
        ref: 'Modelo'
    },
    combustivel: String
});

// Criar modelos
var Vehicle = global.mongoose.model('Veiculos', vehicleSchema);

// Exportar model
module.exports = {
    mgVehicle: Vehicle
};