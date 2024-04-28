let x = 1
let y = 2

// In JS and TS, == and === are different, and == is not recommended.
let equal = x === y;
console.log(equal);

equal = x !== y;
console.log(equal);


console.log('============================================');
let x1 = 1;
let y1 = 1;
let x2 = 1;
let y2 = 1;

equal = x1 === y1 && x2 === y2;
console.log(equal);


console.log('============================================');
// use (condition ? A: B) (A if condition is ture, B otherwise) instead of if
let if_result = true ? 'A' : 'B';
console.log(if_result); // A