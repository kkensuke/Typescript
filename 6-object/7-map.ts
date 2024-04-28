// map
let map = new Map();
map.set('name', 'John Doe');
map.set('age', 30);
console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.has('name'));
console.log(map.has('email'));
console.log(map.size);
map.delete('name');
console.log(map.size);
map.clear();
console.log(map.size);
