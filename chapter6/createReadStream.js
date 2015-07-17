var fs=require('fs');
var file=fs.createReadStream('./message.txt', {start:3,end:12});
file.on('open',function(fd){
	console.log('开始读取文件');	
});
file.on('data',function(fd){
	console.log('读取到数据');	
});
file.on('end',function(fd){
	console.log('文件已经全部读取');	
});
file.on('close',function(fd){
	console.log('文件被关闭');	
});
file.on('error',function(fd){
	console.log('读取文件失败');	
});
