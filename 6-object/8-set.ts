// set
type MyUser = { name: string };
type MySet = Set<MyUser>;
let set: MySet = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// set keeps only unique values
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
console.log( `Size: ${set.size}` ); // 3

for (let user of set) {
    console.log(user.name);
}
