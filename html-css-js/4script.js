// foreach


let arr = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];

arr.forEach((value)=> {
    if(value === 'Alice') {

    } else {
        console.log(value);
        
    }
});


// map

let arr2 = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
let newArr = arr2.map((value)=> {
    return value + "g";
});
console.log(newArr);




// filter
// destructuring
// spread and rest