// 1) array destructing
const ar = [1, 2, 3, 4, 5];
const [a, ,b] = ar;
console.log(a,b);

// 2) object destructing 
const person = { name: 'John', age: 30 };
// const {name:perName, age:perAge} = person;
// console.log(perName, perAge);
const {name, age} = person;  
console.log(name, age);


// 3) function destructing
function sum([a,b]){
    return a+b;
}
console.log(sum([1,2]));


function doubleThem(a, b){
    return [a*2, b*2];
}
console.log(...doubleThem(3,4));      // doubleThem(3,4) -> ei part tuku ekta array return korlo etake destructure korlam


function greet({name, age}){
    console.log(`Hello ${name}!...Your age is ${age}`);
}
greet({name:'Sumaiya', age:21});