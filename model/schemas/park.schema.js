// Schema variable
var Schema = global.mongoose.Schema;

// Park 
var parkSchema = Schema({
    name: String,
    placesPregnant: Number,
    placesNormal: Number,
    placesDisabled: Number,
    placesTotal: Number,
    placesFreeNormal: Number,
    placesFreePregnant: Number,
    placesFreeDisabled: Number,
    placesFreeTotal: Number,
    lat: Number,
    lon: Number,
});

// Criar modelos
var Park = global.mongoose.model('Parks', parkSchema);

// Exportar model
module.exports = {
    mgPark: Park
};
