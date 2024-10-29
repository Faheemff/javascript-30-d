// Write a function createHelloWorld. It should return a new function that always returns "Hello World"


// This is worng

var createFunction = function() {
    return function(){
        return "hello world";
    }
}
//ok



// this is good
var helloWorld = createFunction();


function createHelloWorld() {
    return function () {
        return "Hello World";
    }
};

