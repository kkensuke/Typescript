// Class expression
let Person3 = class {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
let person3 = new Person3('John Doe', 30);
console.log(`Name: ${person3.name}`);
console.log(`Age: ${person3.age}`);
person3.greet();
