module.exports = {
    mgCon: global.mongoose.connect('mongodb://mpark:123@ds119060.mlab.com:19060/mpark', function(err, client) {
        if (err) {
            console.log("Database: ❌")
            console.log(err);
            global.dbState = false;
        }
        else {
            console.log("DataBase: ✔️");
            global.dbState = true;
        };
    })
};