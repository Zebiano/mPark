// Save Users
function saveUser(req, res) {
    // Check if database is reachable
    if (global.dbState == true) {
        // Admin check
        if (req.body.admin == undefined) {
            req.body.admin = false;
        };
        var pic;
        if (req.body.gender == "male") {
            pic = "img/defaultMaleAvatar.png"
        }
        else if (req.body.gender == "female") {
            pic = "img/defaultFemaleAvatar.png"
        }
        // Generates Salt for extra salty players (as well as a hashed password but that isn't that important right?)
        req.body.password = global.bcrypt.hashSync(req.body.password, global.bcrypt.genSaltSync(10));

        // New mgUser()
        var newUser = new global.userSchema.mgUser({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.adress,
            postalCode: req.body.postalCode,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            pic: pic,
            admin: req.body.admin
        });

        // Save User
        newUser.save(function(err) {
            if (err) {
                global.functions.echoDbError("User", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("User", "saved");
            }
        });
    }
    else {
        global.functions.echoDbUnreachable();
    }
};

// Export modules
module.exports = {
    saveUser: saveUser
};
