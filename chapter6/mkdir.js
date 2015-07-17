var fs = require('fs');
fs.mkdir('./test', function(err){
	if(err){
		console.error('mkdir error!')
	}else{
		console.log('mkdir ok!');
	}
});