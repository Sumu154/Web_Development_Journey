  // Math method
let min = Math.min(34, 56, 12, 89, 34);
let max = Math.max(34, 56, 12, 89, 34);
console.log(min, max);

let absVal = Math.abs(-1);
console.log(absVal);

console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));


  // javascript Date
let date = new Date();
console.log(date.toString());

const date2 = new Date('2024-9-9');
console.log(date2.getDate());
console.log(date2.getMonth());

const date3 = new Date(2024, 9, 9);
console.log(date3.getDate());
console.log(date3.getMonth());


  // swap value
let x=5, y=7;
[x,y] = [y,x];
console.log(x, y);

