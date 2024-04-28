console.log(`============================================`);
// prevent changing the object
let user5: {readonly  name: string, age: number} = {
    name: 'John Doe',
    age: 30,
};
// user5.name = 'Jane Doe'; // Error
user5.age = 31;
console.log(`Name: ${user5.age}`);