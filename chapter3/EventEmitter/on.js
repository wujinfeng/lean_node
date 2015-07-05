var http=require('http');
var server=http.createServer();

server.on('request',function(req, res){
	if (req.url !== "/favicon.ico") {
		console.log("req first ");		
		res.write(req.url);
			
	};
	//res.end();
});
server.on('request',function(req, res){
	if (req.url !== "/favicon.ico") {
		console.log(req.url);
		res.write(req.url);
			
	};
	//res.end();
});
server.on('request',function(req, res){
	if (req.url !== "/favicon.ico") {
		console.log("req over!");
		res.write(req.url);
			
	};
	res.end();
});
server.listen(3000,"127.0.0.1");