//generics er T er o limit bedhe dea -> je ei data type chara tumi ar kicu dite parba na
{
  // generic -> T dynamic type 
  const identify = <T extends string | number> (value: T): T => {
    return value;
  }

  console.log(identify("apple"));
  console.log(identify(100));
  // console.log(identify(true));  // Error
}


{
  // generic function for arrays _> with constraint
  const getFirst = <T extends string> (arr: T[]): T => {
    return arr[0];
  }
  console.log(getFirst(['a', 'b', 'c']))
  // console.log(getFirst([100, 200, 300]));  //give error

  // function e multiple generics
  const makePair = <A extends string, B extends number> (a: A, b: B): [A, B] => {
    return [a, b];
  }
  console.log(makePair("name", 25));
  // console.log(makePair(true, [1, 2, 3]));
}


// generic with type
{
  type GenericArray<T extends number | {name: string; age: number|string} > = Array<T>
  const rolls: GenericArray<number> = [3, 5, 7];  //etao thik as number

  const users: GenericArray<{name: string, age: number}> = [  //etao thik as object mile gece
    {
      name: "sumaiya",
      age: 154,
    },
    {
      name: "rohan",
      age: 154,
    }
  ]

  // const chars: GenericArray<string> = ['a', 'b', 'c'];  //etao thik na as string



  // tuple
  type GenericTuple<X extends string, Y extends number> = [X, Y];
  const myself: GenericTuple<string, number> = ["sumaiya", 154];
  console.log(myself)
}



// generic with interface
{
  interface User<T extends number> { //say id any type hote pare na ekhn -> only number
    name: string;
    id: T;
  }


  const user1: User<number> = {
    name: "sumaiya",
    id: 154,
  }
  console.log(user1);

  // const user2: User<string> = {  // bhul
  //   name: "rohan",
  //   id: "151",
  // }
  // console.log(user2);


  // interface with two generics
  interface Person<T extends string | number, U extends string> {
    name: string;
    id: T;
    age: U;
  }

  const person1: Person<number, string> = {
    name: "sumaiya",
    id: 154,
    age: "23",
  }

  const person2: Person<string, string> = {
    name: "sumaiya",
    id: "154",
    age: "23",
  }

  // const person3: Person<number, number> = {  // vul
  //   name: "sumaiya",
  //   id: 154,
  //   age: 23,
  // }

}
