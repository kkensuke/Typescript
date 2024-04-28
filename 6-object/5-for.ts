type TObj = { 
    key1: string,
    key2: string
}  
let obj1: TObj = {
    key1: "foo",
    key2: "bar"
};

console.log(`============================================`);
console.log(Object.keys(obj1)); // returns an array of keys
console.log(Object.values(obj1)); // returns an array of values
console.log(Object.entries(obj1)); // returns an array of key-value pairs

console.log(`============================================`);
// key loop
for(let key of Object.keys(obj1)) {
    console.log(key);
}
// value loop
for(let value of Object.values(obj1)) {
    console.log(value);
}

console.log(`============================================`);
// Declare the key outside the for loop
let k: keyof TObj;

for(k in obj1) {
    console.log(k);
    console.log(obj1[k]);
}