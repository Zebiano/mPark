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
function echoDbSuccess(input) {
    console.log("DB: ".blue + "Successfully ".green + "saved " + input + "!");
}
// Error
function echoDbError(input) {
    console.log("DB: ".blue + "Error ".red + "saving " + input + "!");
}

// Export modules
module.exports = {
    echoDir: echoDir,
    echoDbSuccess: echoDbSuccess,
    echoDbError: echoDbError,
    echoDbUnreachable: echoDbUnreachable
};
