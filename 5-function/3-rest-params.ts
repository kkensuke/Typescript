// rest parameters
function sumAll(...args: number[]) { // args は配列の名前です
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6

function add6(a: number, ...b: number[]): number {
    let sum = a;
    for(let i of b) {
        sum += i;
    }
    return sum;
}
console.log(`${add6(1, 2, 3, 4, 5)}`); // 15