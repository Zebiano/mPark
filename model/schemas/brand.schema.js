// Schema variable
var Schema = global.mongoose.Schema;

// Vehicle Brand
var brandSchema = Schema({
    name: {
        type: String,
        required: true
    },
    model: [{
        type: Schema.Types.ObjectId,
        ref: 'Model'
    }],
    pic: String
});

// Criar modelos
var Brand = global.mongoose.model('Brands', brandSchema);

// Exportar model
module.exports = {
    mgBrand: Brand
};