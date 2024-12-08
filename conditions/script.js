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
