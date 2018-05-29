// Schema variable
var Schema = global.mongoose.Schema;

// Marca do vehiculo
var brandSchema = Schema({
    nome: String,
    modelo: [{
        type: Schema.Types.ObjectId,
        ref: 'Modelo'
    }]
});

// Criar modelos
var Brand = global.mongoose.model('Marcas', brandSchema);

// Exportar model
module.exports = {
    mgBrand: Brand
};