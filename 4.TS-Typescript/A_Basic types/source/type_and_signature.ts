// type alias -> duplicate jei type gula ekebare likhe rakhle shubidha pabo
{
  type stringOrNumber = string | number;
  type userType = { name: string, age: number };

  const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age} `);


  // union & intersection type
  type BooleanOrNumber = boolean | number;
  type BooleanAndNumber = Boolean & number;

  
}
}

{
  // function signature
  let myFunc: () => void   // -> void hocce return type
  let add: (a: number, b: number) => number

  // not const add X
  add = (a: number, b: number) => {
    return a+b;
  }
}