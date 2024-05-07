// extends
class Animal {}
class Rhino extends Animal {}
let rhino = new Rhino();

// rhino is an instance of Rabbit and Animal
console.log(rhino instanceof Rhino); //
console.log(rhino instanceof Animal); // true

console.log(`--------------------------------------------`);
let l = [1, 2, 3];
console.log(l instanceof Array); // true