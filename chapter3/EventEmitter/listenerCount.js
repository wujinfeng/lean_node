var http=require('http');
var events=require('events');

var server = http.createServer();
server.on('request',function  (req, res) {
	if(req.url !== '/favicon.ico'){
		console.log(req.url+"access request!");
	}
});

server.on('request', function  (req, res) {
	if(req.url !== '/favicon.ico'){
		console.log(req.url);
	}
	res.end();
});

server.on('request', function  (req, res) {
	if(req.url !== '/favicon.ico'){
		console.log('request over !');
	}
});
server.listen(3000,'localhost');

console.log(events.EventEmitter.listenerCount(server, 'request'));