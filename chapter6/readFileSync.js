var fs = require('fs');
try{
	var data = fs.readFileSync('./test.txt', 'utf8');
	console.log(data);
}catch(e){
	console.log('read File Sync error');
}