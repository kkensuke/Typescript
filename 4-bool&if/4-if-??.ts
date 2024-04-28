// ?? (nullish coalescing operator)
let w1 = null;
let w2 = 'default string';
let result1 = w1 ?? w2; // if w1 is null or undefined, use w2
let result2 = (w1 !== null && w1 !== undefined) ? w1 : w2; // same as above
console.log(result1); // default string
console.log(result1 === result2); // true


console.log('============================================');
let result3;
let param1 = null;
let param2 = undefined;
let param3 = 'Hello';
result1 = param1 ?? 'default string';
result2 = param2 ?? 'default string';
result3 = param3 ?? 'default string';
console.log(result1);
console.log(result2);
console.log(result3);
