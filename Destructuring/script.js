// destructuring with array 

let arr = ['a', 'b', 'c'];

// bina destructuring

let first = arr[0];
let second = arr[1];
let third = arr[2];

console.log(first);
console.log(second);
console.log(third);


// now destructuring

let [first1, second1, third1] = arr;

console.log(first1);
console.log(second1);
console.log(third1);


// destructuring with object

let obj = {name: 'John', age: 30};


// bina destructuring

let firstName = obj.name;
let secondAge = obj.age;

console.log(firstName);
console.log(secondAge);


// now destructuring

let {name:name, age:age } = obj;
console.log(name);
// console.log(age);

