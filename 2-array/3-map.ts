// map
let arr3 = [1, 2, 3];
let arr4 = arr3.map(x => x * 2);
console.log(arr4);

let arr5 = arr3.map((x, i) => x * (i+1));
console.log(arr5);

let arr6 = arr3.map(x => {
    if (x % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
})
console.log(arr6);