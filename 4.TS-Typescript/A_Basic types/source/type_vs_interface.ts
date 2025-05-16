// primitive -> type alias use korbo
// primitive + object -> interface use korbo


{
  // type aliases
  type Person = {
    name: string;
    age: number;
  }
  const person1: Person = {
    name: "sumaiya",
    age: 23
  }

  // object & interface
  interface User {
    name: string;
    age: number;
  }
  const user1: User = {
    name: "sumaiya",
    age: 23,
  }


  // extends in type and interface both
  type UserWithRole = User & { 
    role: string
  };
  const userWithRole1: UserWithRole = {
    name: "rohan",
    age: 23,
    role: "student"
  } 

  interface PersonWithRole extends Person {
    role: string;
  } 
  const personWithRole1: PersonWithRole = {
    name: "rohan",
    age: 23,
    role: "student"
  } 

}



{
  // array (both type and interface) -> object (in js)
  type Users = string[];
  const users1: Users = ['sumaiya', 'saif', 'rohan'];

  interface Persons {
    [idx: number] : string;
  }
  const persons1: Persons = ['sumaiya', 'saif', 'rohan'];
   
}

{
  // function (both type and interface) -> object (in js)
  type AddNumbers = (a:number, b:number) => number;
  const addNumbers1: AddNumbers = (a, b) => {
    return a+b;
  }
  console.log(addNumbers1(4, 5));

  
  interface MultiplyNumbers {
    (a:number, b:number): number;
  }
  const multiplyNumbers1: MultiplyNumbers = (a,b) => {
    return a*b;
  }
  console.log(multiplyNumbers1(4, 5));
  
   
}

// 🔸 Class and object? → interface
// 🔸 Everything else? → type