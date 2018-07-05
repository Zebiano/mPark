// Edit User
function editUser(req, res) {
    // New mgUser()
    var newUser = new global.userSchema.mgUser({
        _id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        postalCode: req.body.postalCode,
        address: req.body.address,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender
    });

    // Admin
    if (req.body.admin == true) {
        newUser.admin = true
    }
    else {
        newUser.admin = false
    }

    console.log(newUser);

    global.userSchema.mgUser.findOneAndUpdate({ _id: req.body.id }, newUser, function(err) {
        if (err) {
            global.functions.echoDbError("User", "editing");
            console.log(err);
        }
        else {
            global.functions.echoDbSuccess("User", "edited");
        }
    });
}


// Export Module
module.exports = {
    editUser: editUser
}
