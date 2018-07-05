// Get User list
function getListUsers(req, res) {
    // Search all Users
    global.userSchema.mgUser.find({}, function(err, users) {
        if (err) {
            console.log("Error: " + err);
        }
        else {
            // Send Users to client
            res.send(users);
        }
    });
}

// Get User by email
function getUserByEmail(email, callback) {
    // Search all Users to find one
    global.userSchema.mgUser.findOne({ email: email }, callback);
}

// Get User by Id
function getUserById(id, callback) {
    // Search all Users to find one
    global.userSchema.mgUser.findById(id, callback);
}

// Compares the password with the hashed one
function comparePassword(candidatePassword, hash, callback) {
    var result = global.bcrypt.compareSync(candidatePassword, hash, function (err, isMatch) {
        if (err){
            console.log(err);
            throw err;
        } else {
            callback(null, isMatch);
        }
    });
}

// Export Module
module.exports = {
    getListUsers: getListUsers,
    getUserByEmail: getUserByEmail,
    comparePassword: comparePassword,
    getUserById: getUserById
}
