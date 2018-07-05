// Get User
function getUser(req, res) {
    global.userSchema.mgUser.findOne({ _id: req.session.user._id }, function(err, user) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(user.pic);
            if (!user.pic) {
                console.log("Error loading user pic!");
            }
            res.send(user)
        }
    });

};

// Export modules
module.exports = {
    getUser: getUser
};
