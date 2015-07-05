/*
run command 'node app.js 1>info.log' ;
 node app.js 2>error.log; "
 dir==log
 */

console.log("print string log ...");
console.error("print error string log...")

var user= new Object();
user.name="sdf";
user.getName=function  (argument) {
	return this.name;
}
user.setName=function  (name) {
	this.name=name;
}
console.dir(user);

/**
console.time(label);
console.timeEnd(label);
*/

console.time('time');
for (var i=0; i<1000; i++){
	;
};
console.timeEnd('time');

/*
console.trace(label);
*/
var user1= new Object();
user1.name="sdf";
user1.getName=function  (argument) {
	return this.name;
}
user1.setName=function  (name) {
	this.name=name;
}
console.trace("trace");

/*
console.assert(), 
*/
console.assert(1==2,'raise an exception');
