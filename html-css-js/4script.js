let map = map();

let arr = [1,2,3,4,5,6,7];
arr.forEach(function () {
    map.set(arr.indexOf(this), this);
})