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

let arr3 = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
let newArray = arr3.filter((value)=> {
    if(value.startsWith('A')) {
        return value;
    }
})
// destructuring

const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    isActive: true,
    roles : ["User", "Admin"],
    preferences: {
        theme: "dark",
        language: "English",
        notifications: true
    },
    loginHistory: [
        { date: "2024-12-01", ipAddress: "192.168.1.1" },
        { date: "2024-12-02", ipAddress: "192.168.1.2" }
    ]
};

let  loginHistory  = user.loginHistory;
console.log(loginHistory);


let [_, second] = user.loginHistory;
console.log(second);



// spread and rest


const Arr = ['John', 'Jane', 'Doe', 'Smith'];



// spread
const copyName = [...Arr];
console.log(copyName);


//rest

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));