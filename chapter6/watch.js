var fs = require('fs');
fs.watchFile('./message.txt', function  (curr, prev) {
	if(Date.parse(prev.ctime)==0){
		console.log('message.txt create!')
	}else if (Date.parse(curr.ctime)==0) {
		console.log('message.txt delete!');
	}else if(Date.parse(prev.mtime) != Date.parse(curr.mtime)){
		console.log('message.txt update!')
	}

})

fs.watchFile('./message.txt', function(curr, prev ){
	if(Date.parse(curr.ctime)!=0){
		console.log('message.txt size is '+curr.size+' bytes')
	}
})