// Type alias
type User = { name: string, age: number, retire: (date: Date) => void };

let user4: User = {
    name: 'John Doe',
    age: 30,
    retire: (date: Date) => {
        console.log(`${date}`);
    }
};
console.log(`Name: ${user4.name}`);
