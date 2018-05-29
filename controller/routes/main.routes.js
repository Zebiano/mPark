/* --- MAIN ROUTES --- */
// Root directory
global.app.get('/', function(req, res) {
    // Nao fazer redirect para /home pq senao os favicons ja nao funcionam direito!
    global.functions.echoDir("/");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.main.view.html").toString();
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Home
global.app.get('/home', function(req, res) {
    global.functions.echoDir("/home");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.main.view.html").toString();
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Login
global.app.get('/login', function(req, res) {
    global.functions.echoDir("/login");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.login.view.html").toString();
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Profile
global.app.get('/profile', function(req, res) {
    global.functions.echoDir("/profile");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.profile.view.html").toString();
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Park search
global.app.get('/parksearch', function(req, res) {
    global.functions.echoDir("/parksearch");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/park.search.view.html").toString();
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// Register new user
global.app.get('/signup', function(req, res) {
    global.functions.echoDir("/signup");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/user.register.view.html").toString();
    var scripts = global.fs.readFileSync("views/scripts/user.register.script.html").toString();
    res.render('template/geral.html', {
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
    res.render('template/geral.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});
