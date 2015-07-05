var testModule= require("./testModule");
 var dirfileName=require("./dir_file_name");

console.log(testModule.testVar);
testModule.outputTestVar();
if(module == require.main ){
	console.log('this is the main module if application');
}

