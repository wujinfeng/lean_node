var http = require('http');
var server  = http.createServer();

server.on('removeListener', function  (e, f) {
	console.log(" for " + e + " event cancal handle function!");
	console.log(f);
});

server.on('newListener', function  (e, f) {
	console.log(" for " + e + " event new  handle function!");
	console.log(f);
});

var testFunction=function(req, res){
	if(req.url !== '/favicon.ico'){
		console.log('request test over !');
	}
};

server.on('request', function(req, res) {
	if(req.url !== '/favicon.ico'){
		console.log('request access  !');
	}	
})
server.on('request', function(req, res) {
	if(req.url !== '/favicon.ico'){
		console.log(req.url);
	}	
	res.end();
})

server.on('request', testFunction);
server.removeListener('request',testFunction);
server.listen(3000,"localhost");