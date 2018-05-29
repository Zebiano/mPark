/* --- ADMIN ROUTES --- */
// Admin
global.app.get('/admin', function(req, res) {
    global.functions.echoDir("/admin");

    // Save dataBase lists to variables
    // Brands and Models
    var listBm;
    global.brandSchema.mgBrand.find({}, function(err, brands) {
        if (err) throw err;
        listBm = brands;
        
        return listBm;
    });

    /*
    /// Users
    // ############################################################################################
    // get all the users
    global.userSchema.mgUser.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        console.log(users);
    });
    */


    // #############################################

    var css = global.fs.readFileSync("views/css/geral.css.html").toString() + global.fs.readFileSync("views/css/admin.css.html").toString();
    var html = global.fs.readFileSync("views/admin/admin.manager.view.html").toString();
    var scripts = global.fs.readFileSync("views/scripts/admin.manager.script.html").toString();
    //if (USER IS LOGGED IN AND IS ADMIN) {
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html,
        scriptFiles: scripts
    });
    /*} else {
      // SHOW REKT PAGE  
    };*/

});
