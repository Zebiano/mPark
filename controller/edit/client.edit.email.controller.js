// Change emnail
function changeEmail(req, res) {
    global.userSchema.mgUser.findByIdAndUpdate(req.session.user._id, { email: req.body.newEmail }, function(err, user) {
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
    changeEmail: changeEmail
}
