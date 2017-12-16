
define(function(){
	let name = "tom";
	let hello = function(){
		console.info(`I am ${name} !`);
	}
	
	return {
		name:name,
		sayHello:hello
	}
});

