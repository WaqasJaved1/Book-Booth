
module.exports = function(app, pool) {
	app.post('/node_peoples', function(req, res) {
        console.log(req.body);

        if(sess.email != undefined && sess.email != null){
        	query = "select first_name, last_name, email from users where first_name = '"+ req.body.first_name+"' and last_name = '"+ req.body.last_name+"' and email <> '"+ sess.email+"' and email not in (select email1 from followers where email0 = '"+sess.email+"');"
        }else{
        	query = "select first_name, last_name, email from users where first_name = '"+ req.body.first_name+"' and last_name = '"+ req.body.last_name+"';"
        }
        pool.executeQuery(query, result, res, req)
    });

    app.post('/node_follow', function(req, res) {
        console.log("node_follow");
        sess= req.session;
        if(sess.email != undefined && sess.email != null){
        	query = "insert into followers value('"+sess.email +"','"+req.body.email+"');";
        	console.log(query);

        	pool.executeQuery(query, result, res, req);

        }else{
        	res.send({'status':'0'});
        }
    });

    app.post('/node_followers', function(req, res) {
        console.log("node_followers");
        sess= req.session;
        if(sess.email != undefined && sess.email != null){
            query = "select email, first_name, last_name from users where email in (select email0 from followers where email1 ='"+sess.email+"' )";
            console.log(query);

            pool.executeQuery(query, result, res, req);

        }else{
            res.send({'status':'0'});
        }
    });

    app.post('/node_following', function(req, res) {
        console.log("node_following");
        sess= req.session;
        if(sess.email != undefined && sess.email != null){
            query = "select email, first_name, last_name from users where email in (select email1 from followers where email0 ='"+sess.email+"' )";
            console.log(query);

            pool.executeQuery(query, result, res, req);

        }else{
            res.send({'status':'0'});
        }
    });

    result = function(res, data, rows, req){
    	res.send(data);
    	console.log(data);
    }

}