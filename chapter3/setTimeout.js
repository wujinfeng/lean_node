/*setTimeout(cb,ms,[arg],[...])*/

function testfunction (parameter) {
	console.log(parameter);
}

var timer = setTimeout(testfunction,3000,"this is a parameter.");

//clearTimeout(timer);

/*setInterval(cb, ms, [arg],[...])
*/

var timer2 = setInterval(testfunction,3000,"this is a parameter.");

//clearInterval(timer2);
/*
unref()  , cancel timer;
ref()  , exec timer;
*/  
/*timer.unref();
timer.ref();*/


