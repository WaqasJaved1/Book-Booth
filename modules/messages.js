module.exports = function(app, pool) {

    app.post('/node_send_message', function(req, res) {
        if(sess.email != undefined && sess.email != null){
            query = "insert into messages value('"+sess.email+"', '"+req.body.email+"', '"+req.body.message+"', NOW())";

            pool.executeQuery(query, send_data, res, req);

        }else{
            res.send({'status':'0'});
        }
    });

    app.post('/node_get_messages', function(req, res) {
        if(sess.email != undefined && sess.email != null){
            query = "SELECT * FROM book_booth.messages where email0 = '"+sess.email+"' or email1 = '"+sess.email+"' ORDER BY senttime DESC";

            pool.executeQuery(query, send_data, res, req);

        }else{
            res.send({'status':'0'});
        }
    });

}