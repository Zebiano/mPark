/* --- MAIN ROUTES --- */
// Root directory
global.app.get('/', function(req, res) {
    // Nao fazer redirect para /home pq senao os favicons ja nao funcionam direito!
    global.functions.echoDir("/");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/user.main.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/main.script.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/login');
    }
});

// Home
global.app.get('/home', function(req, res) {
    global.functions.echoDir("/home");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/user.main.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/main.script.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/login');
    }
});

// Login
global.app.get('/login', function(req, res) {
    global.functions.echoDir("/login");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) != true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/user.login.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/login.script.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/home');
    }
});

// Logout
global.app.get('/logout', function(req, res) {
    global.functions.echoDir("/logout");

    req.session.destroy();
    res.redirect('/login');
});

// Profile
global.app.get('/profile', function(req, res) {
    global.functions.echoDir("/profile");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/user.profile.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/profile.script.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/login');
    }
});

// Park search
global.app.get('/parksearch', function(req, res) {
    global.functions.echoDir("/parksearch");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/park.search.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/park.search.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/login');
    }
});

// Park Charts
global.app.get('/parkcharts', function(req, res) {
    global.functions.echoDir("/parkcharts");

    // Check if user is logged in
    if (global.functions.userLoggedIn(req) == true) {
        var css = global.fs.readFileSync("views/css/geral.css.html").toString();
        var html = global.fs.readFileSync("views/user.park.charts.view.html").toString();
        var scripts = global.fs.readFileSync("views/scripts/park.charts.script.html").toString();
        res.render('template/template.html', {
            // Mustache code in here
            cssFiles: css,
            targetInput: html,
            scriptFiles: scripts
        });
    }
    else {
        res.redirect('/login');
    }
});


// Register new user
global.app.get('/signup', function(req, res) {
    global.functions.echoDir("/signup");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.register.view.html").toString();
    var scripts = global.fs.readFileSync("views/scripts/user.register.script.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html,
        scriptFiles: scripts
    });
});

// Register successful
global.app.get('/regSuccess', function(req, res) {
    global.functions.echoDir("regSuccess");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.regSuccess.view.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Error
global.app.get('/error', function(req, res) {
    global.functions.echoDir("error");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/error.view.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});
