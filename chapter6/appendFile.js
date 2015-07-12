var fs = require('fs');
/*fs.appendFile('./message.txt', '\r\n this is append data! \r\n', 'utf8',function  (err, data) {
	if(err){
		console.error('append data error!');
	}else{
		console.log('append data ok!');
	}
});*/

fs.appendFileSync('./message.txt', '\r\n this is Sync append data! \r\n');