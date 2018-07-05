// Change password
function changePassword(req, res) {
    // Generates Salt for extra salty players (as well as a hashed password but that isn't that important right?)
    req.body.newPassword = global.bcrypt.hashSync(req.body.newPassword, global.bcrypt.genSaltSync(10));
    
    // save new Password
    global.userSchema.mgUser.findByIdAndUpdate(req.session.user._id, { password: req.body.newPassword }, function(err, user) {
        if (err) {
            console.log(err);
        }
        else {
            res.end('{"success" : "Updated Successfully", "status" : 200}');
        }
    });

}
// Export Module
module.exports = {
    changePassword: changePassword
}
