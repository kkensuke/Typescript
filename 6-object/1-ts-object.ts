// javascript object
// object is a collection of key-value pairs
// key is a string and value can be anything
let user1 = {
    name: 'John Doe',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
console.log(`Name: ${user1.name}`);
console.log(`Age: ${user1.age}`);
user1.greet();


console.log(`============================================`);
// typescript object
let user2: { name: string, age: number, greet: () => void}
= {
    name: 'John Doe',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
console.log(`Name: ${user2.name}`);
console.log(`Age: ${user2.age}`);
user2.greet();



console.log(`============================================`);
// You can omit the key if the variable name of the value is the same as the key.
let age = 30;
let user3: { age: number } = {
    age
    // age: age // same as above.
};
console.log(`Age: ${user3.age}`);