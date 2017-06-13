console.log("howdy");

let globalVar = 500;

// iife: immediately invoked function expression

(function() {
	globalVar += 250;
}());

console.log("global var", globalVar);

