var http = require('http');
var server = http.createServer();

server.on("request", function(req, res){
	if(req.url !== '/favicon.ico'){
		console.log(req.url);
	} 
	res.end();
});
server.on('customEvent', function  (arg1, arg2, arg3) {
	console.log("customEvent emit");
	console.log(arg1);
	console.log(arg2);
	console.log(arg3);
});
server.emit('customEvent', 'parameter1', 'parameter3', 'parameter3');
server.listen(3000, "127.0.0.1")