module.exports = function(app, pool, fs) {

    app.post('/node_login', function(req, res) {
        console.log(req.body);
        query = "SELECT first_name, last_name,email From users where email = '" + req.body.email + "' and password = '" + req.body.password + "';";
        pool.executeQuery(query, login, res, req)
    });

    app.post('/node_register', function(req, res) {
        console.log(req.body);

        query = "insert into users(first_name, last_name, email, password) value ('" + req.body.first_name + "', '" + req.body.last_name + "', '" + req.body.email + "', '" + req.body.password + "')"
        pool.executeQuery(query, register, res, req)
    });

    app.get('/node_logout', function(req, res) {
        logout(req);
    });

    app.post('/node_check_login', function(req, res) {
        sess = req.session;
        if (sess.email) {
            res.send(true);
        } else {
            res.send(false);
        }

    });


    register = function(res, data, rows, req) {
        if(data['status'] == 2){
            set_session(req);
        }
        res.send(data);



        console.log("Registered Successfully");
    }

    login = function(res, data, rows, req) {
        if (rows.rows.length == 0 && data['status'] == "2") {
            data['status'] = 1;
        }

        if (rows.rows.length != 0) {
            set_session(req)

            sess = req.session;
            path = './public/images/avatars/profile_picture-' + sess.email + '.png'
            if (fs.existsSync(path)) {
                console.log('true');
                data['data'][0]['image'] = '/images/avatars/profile_picture-' + sess.email + '.png';
            } else {
                console.log('false');

                data['data'][0]['image'] = '/images/avatars/default.jpg';
            }
        }


        res.send(data);
        console.log("Logged in Successfully")
    }

    set_session = function(req) {
        sess = req.session;
        sess.email = req.body.email;
        console.log(sess);
    }

    logout = function(req) {
        sess = req.session;
        sess.email = null;
        sess.destroy();

        console.log("Logged out Successfully:::", sess)
    }
}
