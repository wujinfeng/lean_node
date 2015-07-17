var fs = require('fs');
fs.readdir('./', function  (err, files) {
	if(err){
		console.error('read dir error!');
	}else{
		console.log(files);
	}
});
/*
[ '1.png',
  'appendFile.js',
  'b.png',
  'test'
   ]
*/