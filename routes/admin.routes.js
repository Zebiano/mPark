/* --- ADMIN ROUTES --- */
// Admin
global.app.get('/admin', function(req, res) {
    global.functions.echoDir("/admin");
    
    // Set timout (15 mins) in order to login again for safety reasons
    //req.session.cookie.maxAge = 900000;

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        if (global.functions.userIsAdmin(req) == true) {
            var css = global.fs.readFileSync("views/css/geral.css.html").toString() + global.fs.readFileSync("views/css/admin.css.html").toString();
            var html = global.fs.readFileSync("views/admin/admin.manager.view.html").toString();
            var scripts = global.fs.readFileSync("views/scripts/admin.manager.script.html").toString();
            //if (USER IS LOGGED IN AND IS ADMIN) {
            res.render('template/template.html', {
                // Mustache code in here
                cssFiles: css,
                targetInput: html,
                scriptFiles: scripts
            });
        }
        else {
            res.redirect('/error');
        }
    }
    else {
        res.redirect('/login');
    }
});
