// *** FASE DE TESTES AINDA *** \\

// --- CLIENT ROUTES --- \\
// Save new user information
global.app.post('/regSave', function(req, res) {
    global.functions.echoDir("/regSave");

    // Save only if connection to database is established and the req has a valid object
    if (global.dbState == true) {
        // Metes aqui o array nao sei como e depois envias para o model
    }
    else {
        var html = global.fs.readFileSync("views/error.html").toString();
        res.render('template/geral.html', {
            // Mustache code in here
            targetInput: html
        });

        if (global.dbState == false) {
            console.log("Database is unreachable. dbState: " + global.dbState);
        }
        else {
            console.log("Parameters invalid. req: " + req);
        };
    }
});
