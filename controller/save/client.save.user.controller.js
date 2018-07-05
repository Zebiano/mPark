// Save Users
function saveUser(req, res) {
    var pic;
    if (req.body.newUser.gender == "male") {
        pic = "img/defaultMaleAvatar.png"
    }
    else if (req.body.newUser.gender == "female") {
        pic = "img/defaultFemaleAvatar.png"
    }
    // Generates Salt for extra salty players (as well as a hashed password but that isn't that important right?)
    req.body.newUser.password = global.bcrypt.hashSync(req.body.newUser.password, global.bcrypt.genSaltSync(10));

    // Check if database is reachable
    if (global.dbState == true) {
        // New mgUser()
        var newUser = new global.userSchema.mgUser({
            name: req.body.newUser.name,
            email: req.body.newUser.email,
            password: req.body.newUser.password,
            address: req.body.newUser.address,
            postalCode: req.body.newUser.postalCode,
            gender: req.body.newUser.gender,
            dateOfBirth: req.body.newUser.dateOfBirth,
            pic: pic,
            admin: false
        });

        // Save User
        newUser.save(function(err) {
            if (err) {
                global.functions.echoDbError("User", "saving");
                console.log(err);
            }
            else {
                global.functions.echoDbSuccess("User", "saved");
                res.send(newUser._id);
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
