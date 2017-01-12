module.exports = function(app, pool) {

    app.post('/node_login', function(req, res) {
        console.log(req.body);
        query = "SELECT first_name, last_name,email From users where email = '"+req.body.email+"' and password = '"+req.body.password+"';";
        pool.executeQuery(query, login, res)
    });

    app.post('/node_register', function(req, res) {
        console.log(req.body);

        query = "insert into users(first_name, last_name, email, password) value ('" + req.body.first_name + "', '" + req.body.last_name + "', '" + req.body.email + "', '" + req.body.password + "')"
        pool.executeQuery(query, register, res)
    });


    register = function(res, data, rows){
    	res.send(data);
    	console.log("Registered Successfully")
    }

    login = function(res, data, rows){
    	if(rows.rows.length == 0 && data['status'] == "2"){
    		data['status'] = 1;
    	}
    	res.send(data);
    	console.log("Logged in Successfully")
    }
}