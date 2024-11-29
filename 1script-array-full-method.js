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

// arr3.splice(0, 6);
// console.log(arr3);

// Concat method in Array

let arr4 = ['apple', 'banana', 'cherry'];
let arr5 = ['orange', 'kiwi'];
let arr6 = ['hello',];
let newArr = arr4.concat(arr5, arr6);
console.log(newArr);

// Slice method in Array


let arr7 = ['java', 'javascript', 'php', 'css', 'js', 'react-js'];
let arr8 = arr7.slice(0,3);
console.log(arr8);


// indexof method in Array

let arr9 = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
console.log(arr9.indexOf('banana'));

// foreach method in Array

let arr10 = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
arr10.forEach(()=> {
    console.log('hello');
});

// push 

let arr90 = ['apple', 'banana', 'cherry', 'kiwi'];
arr90.push('hello', 'hello');
console.log(arr90);

// push array ka last mai ek elements ko add karen ka leya use hota hai  

// pop

let arr91 = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
arr91.pop();
console.log(arr91);

// pop array ka last mai ek element ko delete karen ka leya use hta hai


// shift

let arr92 = ["a", "b", "c", "d", "e", "f", "e"];
let shift =  arr92.shift();
console.log(arr92);
console.log(shift);


// shift method array ka start sa elements ko delete karen ka leya use hota or jo element delete krta hai is ko return krta hai

// unshift

let arr93 = ["a", "b", "c", "d",];
arr93.unshift("f",'a',);
console.log(arr93);

// unshift method array ka start sa elements ko add karen ka leya use hota

// splice

let arr94 = ["a", "b", "c", "d", "e"];
arr94.splice(1, 2);
console.log(arr94);

// splice method array ka specific index se elements ko delete karen ka leya use hota ya add karen ka leya use hota hai


// concat

let arr95 = ["a", "b", "c"];
let arr96 = ["d", "e", "f"];
let arr97 = arr95.concat(arr96);
console.log(arr97);

// concat method ek sa zayada array ko cambain karen ka leya use hota hai  

// slice

let arr98 = ["a", "b", "c", "d", "e"];
let arr99 = arr98.slice(1, 3);
console.log(arr99);

// slice method array mai elements ko strack or protion krta hai or hm ko new array return kr ta hai 

// indexof

let arr100 = ["a", "b", "c", "d", "e"];
console.log(arr100.indexOf("e"));
