{
  // generic -> T dynamic type 
  const identify = <T> (value: T): T => {
    return value;
  }

  console.log(identify("apple"));
  console.log(identify(100));
}

{
  // generic function for arrays
  const getFirst = <T> (arr: T[]): T => {
    return arr[0];
  }
  console.log(getFirst(['a', 'b', 'c']))
  console.log(getFirst([100, 200, 300]));

  // function e multiple generics
  const makePair = <A, B> (a: A, b: B): [A, B] => {
    return [a, b];
  }
  console.log(makePair("name", 25));
  console.log(true, [1, 2, 3]);
}


// generic with type
{
  type GenericArray<T> = Array<T>
  const rolls: GenericArray<number> = [3, 5, 7];

  const users: GenericArray<{name: string, age: number}> = [
    {
      name: "sumaiya",
      age: 154,
    },
    {
      name: "rohan",
      age: 154,
    }
  ]



  // tuple
  type GenericTuple<X, Y> = [X, Y];
  const myself: GenericTuple<string, number> = ["sumaiya", 154];
  console.log(myself)
}


// generic with interface
{
  interface User<T> { //say id any type hote pare
    name: string;
    id: T;
  }


  const user1: User<number> = {
    name: "sumaiya",
    id: 154,
  }
  console.log(user1);

  const user2: User<string> = {
    name: "rohan",
    id: "151",
  }
  console.log(user2);


  // interface with two generics
  interface Person<T, U> {
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

  const person3: Person<number, number> = {
    name: "sumaiya",
    id: 154,
    age: 23,
  }

}

