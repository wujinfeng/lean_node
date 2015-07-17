var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out = fs.createWriteStream('./anotherMessage.txt');
file.on('data', function(data){
	out.write(data);
});
out.on('open', function(fd){
	console.log('write file opened!')
});
file.on('end', function(){
	out.end('goodbye', function(){
		console.log('file all write over.');
		console.log('bytes size: '+out.bytesWritten)
	});
});
