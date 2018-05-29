// Schema variable
var Schema = global.mongoose.Schema;

// Users
var userSchema = new Schema({
    nome: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'You need to specify an email!']
    },
    password: {
        type: String,
        required: [true, 'You need to have a password!']
    },
    morada: String,
    codPostal: String,
    genero: String,
    dataNascimento: Date,
    veiculos: [{
        type: Schema.Types.ObjectId,
        ref: 'Veiculo'
    }],
    admin: Boolean
});

// Criar modelos
var User = global.mongoose.model('Users', userSchema);

// Exportar model
module.exports = {
    mgUser: User
};