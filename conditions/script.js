// for loop k matlab ya hota hai ham ko pata ho ka ek kam ktni bar krwana ho matlab ka muja pata hai
// ke ya kam muja 10 bar krna hai to mai for loop ka istmal karu ga 

// for loop ki syntax

for(i = 1; i < 10; i++ ) {
    console.log(i);
    
}

// while loop
let index = 0;
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2;
    
}



let muArray = ['flash', 'batman', 'superman'];

let arr = 0;

while(arr < muArray.length){
    console.log(`value of muArray ${muArray[arr]}`);
    arr = arr + 1;
    
}



// do while 

let value = 0
do {
    console.log(value);
    value = value + 1;
} while (value < 30);




// for of loop syntax 

let names = ['Alice', 'Bob', 'Charlie'];

for(let name of names){
    console.log(name);
}


let mess = 'hello message';

for(let char of mess) {
    console.log(char);
    
}

// for in loop syntax 

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for(let key in person) {
    console.log(person[key]);
    
}



// for loop, while loop, do while loop, for in loop, for of loop, syntax all loops

// for syntax 

for(let i = 1; i < 10 ; i++ ){
    console.log(i);
};


// while loop syntax 

let whi = 20;
while(whi < 30){
    whi = whi + 1;
    console.log(whi);   
};



// do while loop syntax

let dowhi = 70;

do{
    console.log(dowhi);
    dowhi = dowhi + 1;
} while(dowhi < 60);



// for in loop syntax

let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in obj){
    console.log(obj[key]);
}


// for of loop syntax

let forOf = ['apple', 'banana', 'cherry'];

for(let fof of forOf) {
    console.log(fof);
    
}



// questions part for loop questions

// 01 = Write a for loop to print numbers from 1 to 10.


for(let i = 1; i < 11; i++){
    console.log(i);
};


// 02 = Write a for loop that calculates the sum of the first 10 natural numbers (1 + 2 + 3 + ... + 10).


let sum = 0;
for(let i = 1; i < 11; i++){
    sum += i;
    console.log(sum);
};


// 03 = Write a for loop to print the multiplication table of 5 (5 * 1, 5 * 2, ... 5 * 10).

let mult = 5;
for(let i = 1; i < 10; i++){
    console.log(5 * i);
    
};


// medium tasks


// 01 = Write a for loop to find the factorial of a given number (n!). For example, for n = 4, the factorial is 4 * 3 * 2 * 1 = 24.

let n = 4;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i;
};

console.log(factorial);



// Given array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Initialize counters for odd and even numbers
let evenCount = 0;
let oddCount = 0;

// Loop through each number in the array
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {  // If the number is divisible by 2, it's even
        evenCount++;
    } else {  // If the number is not divisible by 2, it's odd
        oddCount++;
    }
}

// Print the results
console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);



// for(let i = 11; i >= 1; i--){
//     console.log(i);
// };


let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numChecker = 9 

for(let i = 1; i < numArray; i++){
    if(numChecker == numArray[i]){
        console.log(numChecker);
    }
};