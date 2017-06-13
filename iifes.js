console.log("howdy");

// let globalVar = 500;

// iife: immediately invoked function expression

var globalThing = (function() {
	let name = "Fred";
	return {
		title: "GlobalThing",
		printAName: function() {
			return name + "Smith";
		}
	};
}());

var globalStuff = (function(thing) {
	thing.newProp = "Now I'm Lost"
	return thing
}(globalThing));

console.log("global var", globalThing);


// GETTERS and SETTERS, functions you can run to get and set values in your code