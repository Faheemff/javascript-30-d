// Array in Javascript

let arr = ['apple', 'banana', 'cherry'];
console.log(arr);
// Push method in Array

arr.push('data', 'normal');

console.log(arr);
// Pop method in Array
arr.pop();


console.log(arr);

// Shift method in Array 

let arr1 = ['apple', ' banana', 'orange'];
let firstFruits = arr1.shift();
console.log(arr);
console.log(firstFruits);


// Unshift method in Array

let arr2 = ['apple', 'banana', 'orange'];
arr2.unshift('kiwi', 'mango');
console.log(arr2);

// Splice method in Array

let arr3 = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
arr3.splice(0, 0, 'grape'); // adding to arr3
console.log(arr3);

// and removing from arr3 whit the help of splice method

arr3.splice(0, 6);
console.log(arr3);