var fs= require('fs');
fs.utimes('./message.txt', new Date(), new Date(), function  (err) {
	if (err) {console.log( 'error!')};
	console.log('ok')
})