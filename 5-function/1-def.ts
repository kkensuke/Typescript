// Function declaration
console.log(add1(1, 2)); // You can use this function before its declaration.
function add1(a: number, b: number): number {
    return a + b;
}
console.log(add1(1, 2));

// Function expression. You can't use this function before its declaration.
// console.log(add2(1, 2)); // You can't use this function before its declaration.
const add2 = function(a: number, b: number): number {
    return a + b;
}
console.log(add2(1, 2));

// Arrow function with explicit return type
const add3 = (a: number, b: number): number => {
    return a + b;
}
console.log(add3(1, 2));

// Arrow function with implicit return type
const add4 = (a: number, b: number): number => a + b;
console.log(add4(1, 2));

// In JavaScript, arrow functions with a single parameter do not require parentheses.
// const double = a => a * 2;
// console.log(double(2));

// Arrow function with no parameters
const hello = () => 'Hello, world!';
console.log(hello());


// default parameters
function add5(a: number, b: number = 10): number {
    return a + b;
}
console.log(add5(1)); // 11