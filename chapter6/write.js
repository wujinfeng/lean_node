var fs = require('fs');
var buf = new Buffer('我喜欢编程')
fs.open('./message.txt', 'w' , function  (err, fd) {
	fs.write(fd, buf, 3, 9 , 0, function  (err, written, buffer ) {
		if(err) console.log('write error!');
		console.log('write ok!');
		fs.close(fd);
	});
});
