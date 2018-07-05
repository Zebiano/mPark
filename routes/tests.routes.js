/* --- TESTING FILES --- */
// 1st
global.app.get('/test', function(req, res) {
    global.functions.echoDir("/test");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/testing/test.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// 2nd
global.app.get('/test2', function(req, res) {
    global.functions.echoDir("/test2");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/testing/admin.manager.view.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// 3nd
global.app.get('/test3', function(req, res) {
    global.functions.echoDir("/test3");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("views/testing/admin.view.html").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});

// debugging
global.app.get('/debug', function(req, res) {
    global.functions.echoDir("/debug");

    var css = global.fs.readFileSync("views/css/geral.css.html").toString();
    var html = global.fs.readFileSync("logs/log.txt").toString();
    res.render('template/template.html', {
        // Mustache code in here
        cssFiles: css,
        targetInput: html
    });
});
