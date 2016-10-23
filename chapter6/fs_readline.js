const fs=require('fs');
const readline = require('readline');

const fs_name = './q/20161021.txt';

const rl = readline.createInterface({
	input:fs.createReadStream(fs_name)
});

let pv_count = 0;

rl.on('line',(line)=>{
	if(line.indexOf('show_log_10') > -1 && line.indexOf('57ff31bef7124eba742d95eb') > -1 && line.indexOf('2016-10-21')>-1 ){
		pv_count += 1;		
		
	}
});

rl.on('close',()=>{
	console.log(pv_count);
	console.log('over.');
	process.exit(0);
});


