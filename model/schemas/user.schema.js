// Schema variable
var Schema = global.mongoose.Schema;

// Users
var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: [true, 'You need to specify an email!']
    },
    password: {
        type: String,
        required: [true, 'You need to have a password!']
    },
    address: String,
    postalCode: String,
    gender: String,
    dateOfBirth: Date,
    pic: String,
    vehicles: [{
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }],
    parked: [],
    admin: Boolean
});

/*// Middleware para poder fazer hash a password
userSchema.pre('save', function(next) {
    var user = this;

    // generates Salt for extra salty players
    global.bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            global.functions.echoDbError("Password", "generating Hash for");
            console.log(err);
        }
        else {
            user.password = hash;
        }
    });

    // generates Salt for extra salty players
    global.bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            global.functions.echoDbError("Password", "generating Salt for");
            console.log(err);
            next();
        }
        else {
            global.bcrypt.hash(user.password, salt, function(err2, hash) {
                if (err2) {
                    global.functions.echoDbError("Password", "generating Hash for");
                    console.log(err);
                    next();
                }
                else {
                    user.password = hash;
                    next();
                }
            });
        }
    });

    global.bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        else {
            user.password = hash;
            next();
        }
    })
});*/

// Criar modelos
var User = global.mongoose.model('Users', userSchema);

// Exportar model
module.exports = {
    mgUser: User
};
