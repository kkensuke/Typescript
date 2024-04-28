// Literal (means exact or specific)
let quantity: 50 | 100 = 50; // quantity can only be 50 or 100
console.log(quantity); // 50

quantity = 100;
console.log(quantity); // 100

// quantity = 200; // Error


console.log(`============================================`);
type Quantity = 50 | 100;
let quantity2: Quantity = 50;
console.log(quantity2); // 50

quantity2 = 100;
console.log(quantity2); // 100

// quantity2 = 200; // Error
