var mysql = require('mysql');
var connection  = mysql.createConnection({
	host:'localhost',
	port:3306,
	database:'test1',
	user:'root',
	password:'root'
});
var pool = mysql.createPool({
	host:'localhost',
	port:3306,
	database:'test1',
	user:'root',
	password:'root'	
});
function handleDisconnect () {
	connection.connect(function(err){
		if(err){
			console.log('mysql connect error!');
		}else{
			console.log('mysql connect ok!');
		}
	})
}
connection.on('error',function(err){
	if(err.code==='PROTOCOL_CONNECTION_LOST'){
		console.log('mysql connect lost!');
		setTimeout(function(){
			handleDisconnect();
		},5000);
	}else{
		throw err;
	}
});
handleDisconnect();