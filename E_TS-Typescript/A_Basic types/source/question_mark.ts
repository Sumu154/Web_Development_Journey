{
  // ternary operator || optional operator ||
  const age: number = 20;
  const isAdult: string = age>=18 ? 'Adult' : 'Not adult'
  console.log(isAdult);


  // nullish coalescing -> null / undefined ---> decision making
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? 'Guest'
  console.log({ result1 })
}