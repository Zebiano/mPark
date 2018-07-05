// Check Credentials
function checkLogin(req, res) {
    // Find user with certain email
    global.userSchema.mgUser.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
            console.log("Erro:");
            console.log(err);
        }
        else {
            if (user) {
                console.log("Found user! Checking credentials...");
                if (global.bcrypt.compareSync(req.body.password, user.password) == true) {
                    req.session.user = user;
                    console.log("Successfully logged-in. Welcome!");
                    res.redirect('/home');
                }
                else {
                    console.log("Wrong Password. Try again");
                    res.redirect('/error');
                }
            }
            else {
                console.log("User doesn't exist. Try again");
                res.redirect('/error');
            }
        }
    });
};

// Export modules
module.exports = {
    checkLogin: checkLogin
};
