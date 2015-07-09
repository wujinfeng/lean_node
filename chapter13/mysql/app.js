var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	database : 'test1',
	user : 'root',
	password : 'root'
});

connection.connect(function  (err) {
	if(err){
		console.log('connect mysql error!');
	}else{
		console.log('connect mysql ok!');
		connection.end(function(err){
			if(err){
				console.log('close mysql error!');
			}else{
				console.log('colose mysql ok!');
			}
		})
	}
})