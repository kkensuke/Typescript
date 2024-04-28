// Optional type of function parameter
function greet2(name?: string) { // if name is not provided, it is undefined
    if (name === undefined) {
        console.log(`Hello, anonymous!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greet2('John');
greet2();


// The following function call an error without an argument
function greet3(name: string | undefined) {
    if (name === undefined) {
        console.log(`Hello, anonymous!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greet3('John');
greet3(undefined);
// greet3(); // Error


console.log('=============================================');
// Optional type of object property
type Student = {
    name: string;
    age?: number;
};

let student1: Student = {
    name: 'John',
    age: 25
};
console.log(student1);

let student2: Student = {
    name: 'Jane'
};
console.log(student2, student2.age);
