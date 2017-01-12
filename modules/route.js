module.exports = function(app) {

    app.post('/node_login', function(req, res) {
        console.log("success");
        res.send("go");
    });

    app.post('/node_register', function(req, res) {
        console.log("success");
        res.send("go");
    });

}