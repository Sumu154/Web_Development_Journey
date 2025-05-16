console.log('hello')


{
  // data type declare
  let username: string = "Sumaiya";
  let age: number = 23;
  let isMern: boolean = true;
  let password: string | number = "abc";
  console.log(typeof password, typeof username);

  // enum type
  enum RType { Success, Failure, Unauthenticated, Forbidden };
  

}

let anything: any = "hello";
anything = 123;
anything = true;
// anything hole reassign kora jabe


// arrays
let fruits: string[] = ["apple", "banana", "orange"];
let scores: number[] = [70, 90, 80];
scores.push(100);
const newScores: number[] = scores.map(it => {
  return it*2
})

console.log(scores)
console.log(newScores)

let user: [number, string] = [1, "sumaiya"];

  // array operations
fruits.forEach((it) => {
  return it;
})


// functions in ts
const greet = (name: string): string => {
  return `hello ${name}`;
}

const greetUser = (name: string, age: number): string => {
  return `hello ${name}. You are ${age} years old`;
}







 

