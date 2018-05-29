$("#botao").click(function (e) { 
    e.preventDefault();
    
    // get all the users
User.find({}, function (err, users) {
if (err) throw err;
// object of all the users
console.log(users);
});

    
});