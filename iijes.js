console.log("howdy");

let globalVar = 500;

// iife: immediately invoked function expression

(function(num) {
	globalVar += num;
}(globalVar));

(function(num) {
	globalVar += num;
}(globalVar));

console.log("global var", globalVar);

