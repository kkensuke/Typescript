// Optional chaining
let book: undefined | { title: string };
let title = book?.title;
console.log(title); // undefined
book = { title: 'The C Programming Language' };
title = book?.title;
console.log(title); // The C Programming Language
