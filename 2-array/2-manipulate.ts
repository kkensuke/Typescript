// array manipulation
// push() : add items to the end of the array
let l4: number[] = [1, 2, 3];
l4.push(4);
console.log(l4);

// pop() : remove the last element and return it
l4.pop();
console.log(l4);

// shift() : remove the first element and return it
l4.shift();
console.log(l4);

// unshift() : add items to the beginning of the array
l4.unshift(0);
console.log(l4);

// splice(start, deleteCount, item1, item2, ...) : remove deleteCount elements from start and insert item1, item2, ...
l4.splice(1, 1, 20, 30);
console.log(l4);

// slice(start, end) : return a new array from start to end (end not included)
let l5 = l4.slice(1, 3);
console.log(l5);