// Basic Function Create

let strr = "Create Function";

function CreateFunction() {
    return console.log(strr);
    
};

CreateFunction();



let a = 10;
let b = 20;

//  That is   | parameter 
function sum(a,b){
    return a + b;
};

// That is    | argument
let total = sum(a,b);
console.log(total);



function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));



function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!

