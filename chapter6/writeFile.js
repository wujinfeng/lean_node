var fs = require('fs');
/*fs.writeFile('./message.txt', 'this is first line. \r\n this is seconed line!', function  (err) {
	if(err){
		console.error('write File error!');
	}else{
		console.log('write File ok!');
	}
});*/

/*var data=new Buffer('I love biancheng');
fs.writeFile('./message1.txt', data, function(err){
	if(err){
		console.error('write File error!');
	}else{
		console.log('write File ok!');
	}
});*/

fs.readFile('./1.png', 'base64', function(err, data){
	fs.writeFile('./b.png',data.toString(), 'base64',function(err ){
		if(err){
			console.error('write File error!');
		}else{
			console.log('write file ok!');
		}
	})
})