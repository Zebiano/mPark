// Schema variable
var Schema = global.mongoose.Schema;

// Modelo do vehiculo
var modelSchema = Schema({
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca'
    },
    nome: String
});

// Criar modelos
var Model = global.mongoose.model('Modelos', modelSchema);

// Exportar model
module.exports = {
    mgModel: Model
};