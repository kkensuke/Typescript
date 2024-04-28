class Person2 {
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

// Inheritance
class Employee extends Person2 {
    salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. I make $${this.salary} a year.`);
    }
}
let employee = new Employee('John Doe', 30, 100000);
console.log(`Name: ${employee.name}`);
console.log(`Age: ${employee.age}`);
console.log(`Salary: ${employee.salary}`);
employee.greet();
