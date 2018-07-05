// Schema variable
var Schema = global.mongoose.Schema;

// Vehicle model
var modelSchema = Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    },
    name: String
});

// Criar modelos
var Model = global.mongoose.model('Models', modelSchema);

// Exportar model
module.exports = {
    mgModel: Model
};
