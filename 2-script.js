// sync and async kaya hota hai!

// sync matlab ek ke baad dusta hoga, jab tak ek command compelete naa ho dusra shuru nhai hoga 

// async matlb saare kaam ek saath shuru kardo, jiska answer pahle aajaye uska jawaab dedena!


// kais pata chalta hai ki hum sync code likh rahe hai ya async ?


//>
// ager tum ya use kr raha ho tum async use kr raha ho;
// setTimeout;
// setInterval;
// Promise;
// fetch;
// axios;
// XMLHttpRequest;


setTimeout(()=> {
    console.log('that is async');
},3000);



async function api() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}