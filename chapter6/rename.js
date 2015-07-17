var fs = require('fs');
fs.rename('./message.txt', './test/test.txt',function  (err) {
	if(err){
		console.log('error');
	}else{
		console.log('ok');
	}
})