var multer = require('multer');


var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/avatars/');
    },
    filename: function(req, file, callback) {
        sess = req.session;
        console.log(sess);

        if (sess.email) {
            callback(null, file.fieldname + '-' + sess.email + '.png');
        }
    }
});
var upload = multer({ storage: storage }).single('profile_picture');

module.exports = function(app, pool, fs) {
    app.post('/node_upload_photo', function(req, res) {

        upload(req, res, function(err) {
            if (err) {
            	console.log(err);
                
            }

                res.redirect('profile');


            console.log("----------------" + req.body.title);
        });
    });

    app.get('/node_logged_user', function(req, res) {
        sess = req.session;
        console.log('true');

        if(sess && sess.email!=null){
            query = "SELECT first_name, last_name,email From users where email = '"+sess.email+"';"
            pool.executeQuery(query, profile_logged_user, res,req);
        }else{
            data = {}
            data['status'] = "0";
            res.send(data);
        }
        
    });

    profile_logged_user = function(res, data, rows, req){
        sess = req.session;
        path = './public/images/avatars/profile_picture-'+ sess.email+'.png'
        if (fs.existsSync(path)) {
            console.log('true');
            data['data'][0]['image'] = '/images/avatars/profile_picture-'+ sess.email+'.png';  
        }else{
            console.log('false');

            data['data'][0]['image'] = '/images/avatars/default.jpg';  
        }
        console.log("______________________________")
        console.log(data);
        console.log("______________________________")

        res.send(data);
    }


}
