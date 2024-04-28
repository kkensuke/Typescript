// array manipulation
// push(items) は items を末尾に追加します。
let l4: number[] = [1, 2, 3];
l4.push(4);
console.log(l4);

// pop() は末尾の要素を削除し、それを返します。
l4.pop();
console.log(l4);

// shift() は先頭の要素を削除し、それを返します。
l4.shift();
console.log(l4);

// unshift(items) はアイテムを先頭に追加します。
l4.unshift(0);
console.log(l4);

// splice(start, deleteCount, item1, item2, ...) は start から deleteCount 分の要素を削除し、item1, item2,.. を追加します。
l4.splice(1, 1, 20, 30);
console.log(l4);

// slice(start, end) は start から end までの要素を取得します。end は含まれません。
let l5 = l4.slice(1, 3);
console.log(l5);