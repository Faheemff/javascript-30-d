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

let obj = { name: 'John', age: 30 };


// bina destructuring

let firstName = obj.name;
let secondAge = obj.age;

console.log(firstName);
console.log(secondAge);


// now destructuring

let { name: name, age: age } = obj;
console.log(name);
// console.log(age);



// ager array ya object ka ander kio value na ho to hamm in ka ander  Default Values set kr sehkta hai 

let numbers = [10];

// Destructuring with default value:
let [num1, num2 = 20] = numbers;

console.log(num1); // 10
console.log(num2); // 20


let car = { model: 'Toyota' };

// Default value:
let { model, color = 'Black' } = car;

console.log(model); // 'Toyota'
console.log(color); // 'Black'



// first question 

// Tumhare paas ek object hai jo kisi user ke details ko represent karta hai:


// Tumhe is object ko destructure karke nikalna hai:

// username
// fullName
// location
// theme

const user = {
    username: "Ali123",
    password: "securePass",
    profile: {
        fullName: "Ali Khan",
        age: 30,
        location: "Lahore",
    },
    preferences: {
        theme: "dark",
        notifications: true,
    },
};

const { username, profile: { fullName, location }, preferences: { theme } } = user;

console.log(username);
console.log(fullName);
console.log(location);
console.log(theme);


// Question:
// Tumhare paas ek array hai jo products ke details store karta hai:


const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Mobile", price: 50000 },
    { id: 3, name: "Tablet", price: 30000 },
];

// Tumhe array destructuring ka use karke:

// Pehla product ka name aur price nikalna hai.
// Dusra product ka name nikalna hai.

const [firstProduct, secondProduct] = products;

console.log(firstProduct.name);
console.log(firstProduct.price);
console.log(secondProduct.name);




