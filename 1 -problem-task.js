// Write a function createHelloWorld. It should return a new function that always returns "Hello World"

var createFunction = function() {
    return function(){
        return "hello world";
    }
}

var helloWorld = createFunction();


function createHelloWorld() {
    return function () {
        return "Hello World";
    }
}