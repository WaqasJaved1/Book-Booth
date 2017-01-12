var mysql = require('mysql');
// Initialize pool
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '127.0.0.1',
    user: 'root',
    password: 'seecs@123',
    database: 'book_booth',
    debug: false
});

// module.exports = pool;

module.exports = {

    executeQuery:function(query, callback, res) {
        pool.getConnection(function(err, connection) {
        	data = {}

            if (err) {
                console.log(err);

                connection.release();
                data['status'] = "0";//Error
                res.send(data);
            }

            connection.query(query, function(err, rows) {
                connection.release();
                console.log(err);
                if (!err) {
                	data['status'] = "2";	//Success
                	data['data'] = rows;
                }else{
                	if(err.errno == 1062){
                		data['status'] = "1";	//DUP
                	}else{
        				data['status'] = "0"; //Error
                	}
                }

                callback(res, data, { rows: rows });

            });
            connection.on('error', function(err) {
                console.log(err);
            	data['status'] = 0;//Error
            	res.send(data);
            });

            return;
        });
    }
}
