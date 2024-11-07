let functio =  ()=> {
    async function careteApi(params) {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
        res(data);
    }
}