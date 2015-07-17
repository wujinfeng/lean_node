var fs = require('fs');
fs.exists('./message.txt', function  (exists) {
	if(exists){
		console.log('file  exists!')
	}else{
		console.log('file  not exists!')
	}
})