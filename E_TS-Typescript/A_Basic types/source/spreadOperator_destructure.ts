// spread operator
{
  const arr1: number[] = [1, 2, 3, 4];
  const arr2: number[] = [5, 6, 7, 8];

  console.log(arr1)
  console.log(arr2)

  arr1.push(...arr2)
  console.log(arr1)
}


{
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  }

  const obj2 = {
    d: 4,
    e: 5,
    f: 6,
  }

  const obj = {
    ...obj1,
    ...obj2
  }
}


// rest operator
{
  const greet = (...friends: string[]) => {
    friends.forEach((it: string) => {
      console.log(`Hi, ${it}`)
    })
  }

  greet('sumaiya', 'rohan')
}

// destruture
{
  const obj2 = {
    d: 4,
    e: 5,
    f: 6,
  }

  const { d, e } = obj2;
  // const { d:number, e:number } = obj -> hbe na bhul
}

