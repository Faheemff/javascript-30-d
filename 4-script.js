{
    let carName = 'Toyata';
};
{                                 // That called Block Scope in javascript.js
    let carName = 'Toyata';
};
{
    let carName = 'Toyata';

    console.log(carName);
};


// Function scope in javascript.js;

function man() {
    var name = 'Hello';          // thaat called function scope in javascript
};

man();

var x = 10;

// let x;
// x = 20;

// console.log(x);




let Hel = 40;

function maan() {
    let hel  = 10;
    console.log(Hel);
    console.log(hel);
};


maan();

console.log(Hel);




///  now move on Promises.


let promises = new Promise((res, rej)=> {
    alert("Hello")
    res(56)
});


let functio =  ()=> {
    async function careteApi(params) {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
        res(data);
    }
};

let funct =  ()=> {
    async function careteApi(params) {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
        res(data);
    }
}

console.log(promises);