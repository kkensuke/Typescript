// union types in variable declaration
let unionType: number | string;

unionType = 1;
console.log(`${unionType}`);

unionType = 'Hello, world!';
console.log(`${unionType}`);


console.log(`============================================`);
// union types in function parameters
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'string') {
        weight = parseInt(weight);
    }
    return weight * 2.20462;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));


console.log(`============================================`);
// Nullable
function greet(name: string | null): void {
    if (name === null) {
        console.log(`Hello, anonymous!`);
    } else {
        console.log(`Hello, ${name.toUpperCase()}!`);
    }
}
greet('John');
greet(null);
