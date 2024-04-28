let newname = 'John';

let welcome = function(age: number){
  if(age < 18){
    return function(name: string) { console.log("Hello! " + name); }
  } else {
    return function(name: string) { console.log("Greetings! " + name); }
  }
}
const func0_1 = welcome(10)
func0_1(newname);
const func0_2 = welcome(20)
func0_2(newname);


console.log(`--------------------------------------------`);
// use (condition ? A: B) (A if condition is ture, B otherwise) instead of if
let welcome1 = function(age: number){
  return (age < 18)
  ? function(name: string) { console.log("Hello! " + name); }
  : function(name: string) { console.log("Greetings! " + name); };
}
// you can't use "name" as a variable here instead of "newname", it causes error.
const func1_1 = welcome1(10)
func1_1(newname);
const func1_2 = welcome1(20)
func1_2(newname);


console.log(`--------------------------------------------`);
// arrow function
let welcome2 = (age: number) => {
  return (age < 18)
  ? (name: string) => { console.log("Hello! " + name); }
  : (name: string) => { console.log("Greetings! " + name); };
}
const func2_1 = welcome2(10)
func2_1(newname);
const func2_2 = welcome2(20)
func2_2(newname);
