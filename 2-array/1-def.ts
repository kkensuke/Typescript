// array
let l1: number[] = [1, 2, 3];
console.log(l1);

let l2: Array<number> = [1, 2, 3]; // same as l1
console.log(l2);


let l3 = []; // any
l3[0] = 1;
l3[1] = '2';
l3[2] = 3;
console.log(l3);


// Tuple (fixed length array with fixed type)
let t1: [string, number];
t1 = ['hello', 10];
console.log(t1);