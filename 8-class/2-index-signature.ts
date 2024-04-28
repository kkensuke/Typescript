// index signature
class NumberOnly {
    [index: string]: number; // If you want to add a new property to an object, you need to define an index signature. If you set "any" instead of "number", you can add any type of property.
    id: number;
    age: number;

    constructor(id: number, age: number) {
        this.id = id;
        this.age = age;
    }
}
let person2 = new NumberOnly(1, 30);
console.log(`ID: ${person2.id}`);
console.log(`Age: ${person2.age}`);

// add a new property
person2.height = 180;
console.log(`Height: ${person2.height}`);
person2.weight = 70;
console.log(`Weight: ${person2.weight}`);
// person2.name = 'John Doe'; // error