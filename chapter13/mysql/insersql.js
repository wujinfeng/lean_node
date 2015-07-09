var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	database : 'user',
	user : 'root',
	password : 'root'
});
connection.connect(function  (err) {
	if(err){console.log('mysql connect error!')
	}else{
		console.log('mysql connect  ok!');
		connection.query('INSERT INTO person SET ?',
			{username:'jinfeng1',firstname:'wu1'},function(err, result){
				if(err){
					console.log('insert error!');
					console.log(err);
				}else{
					connection.query(
						'SELECT * FROM ??',['person'],function(err, result){
							if(err){console.log('select error!')
							}else{
								console.log(result);
								connection.end();
							}
						});
				}
			});
	}
});