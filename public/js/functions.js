// -- Login -- \\
// Checks if user is logged in
function userLoggedIn(req) {
    if (req.session.user != undefined) {
        return true
    } else {
        return false
    }
}

// Checks if logged in user is admin
function userIsAdmin(req) {
    if (req.session.user.admin == true) {
        return true
    } else {
        return false
    }
}

// -- Directories -- \\
// Directory
function echoDir(dir) {
    console.log("Directory: ".cyan + dir.cyan);
};

// -- Database -- \\
// Unreachable
function echoDbUnreachable() {
    console.log("DB: ".blue + "Error. ".red + "Database unreachable!");
}
// Success
function echoDbSuccess(input, type) {
    console.log("DB: ".blue + "Successfully ".green + type + " " + input + "!");
}
// Error
function echoDbError(input, type) {
    console.log("DB: ".blue + "Error ".red + type + " " + input + "!");
}
// Doesnt exist. Trying to save
function echoDbMissing(input) {
    console.log("DB: ".blue + input + " doesn't exist. Trying to save it...");
}
// Exists. Not saving
function echoDbExists(input, type) {
    console.log("DB: ".blue + input + " exists. Not saving it.");
}
// Not sent through form. Not saving
function echoDbUnsent(input) {
    console.log("DB: ".blue + input + " wasn't sent through Form. Not saving it.");
}

// -- Debugging -- \\
function createLog(input) {
    // writes to a file
    global.fs.writeFile('logs/log.txt', input, (err2) => {
        // throws an error, you could also catch it here
        if (err2) throw err;

        // success case, the file was saved
        console.log('Saved to log.txt');
    });
};

// Export modules
module.exports = {
    createLog: createLog,
    echoDir: echoDir,
    echoDbSuccess: echoDbSuccess,
    echoDbError: echoDbError,
    echoDbUnreachable: echoDbUnreachable,
    echoDbMissing: echoDbMissing,
    echoDbExists: echoDbExists,
    echoDbUnsent: echoDbUnsent,
    userLoggedIn: userLoggedIn,
    userIsAdmin: userIsAdmin
};
