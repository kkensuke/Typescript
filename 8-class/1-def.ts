class Person {
    // static method: you can call a static method without creating an instance of the class.
    static type: string = 'Person';
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    static mymethod() {
        console.log(`This is a static method.`);
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
console.log(`Type: ${Person.type}`);
Person.mymethod();

console.log(`--------------------------------------------`);
let person1 = new Person('John Doe', 30);
console.log(`Name: ${person1.name}`);
console.log(`Age: ${person1.age}`);
person1.greet();
