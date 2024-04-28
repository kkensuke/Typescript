// Prototype
let animal = {
    eats: true
};
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
console.log(rabbit.jumps);
console.log(rabbit.eats);

// In JavaScript, you can use __proto__ to set the prototype of an object.
// However, it is not recommended to use __proto__ in modern code.
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal; // (*)

