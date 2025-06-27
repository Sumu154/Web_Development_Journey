           /* functions */

// function types
  // function definition
function sum1(a, b){
    return a+b;
}
console.log(sum1(3,4));


  // function expression
const sum2 = function(a,b){
    return a+b;
}
console.log(sum2(3,4));

  // arrow function
const sum3 = (a, b) => {
    return a+b;
}

console.log(sum3(3,4));
  

//sum3(3,8) -> console e output dekhabe


// forEach function in array
let a = ["dhaka", "bogra", "sylhet"];

//array.foreach(function defination)
   // 1st way 
a.forEach((val, i) => {
    console.log(val.toUpperCase(), i, a);
});

   // 2nd way
let toUpper = (val) => {
    console.log(val.toUpperCase());
}
a.forEach(toUpper);

            
                /* methods */

//map method  ->   jei value return kore sheta ekta new array
let newArr = a.map((val) => {
    return val;
});
console.log(newArr);


//filter method -> filter kore kicu value alada kore new array banabe
let a1 = [1, 2, 3, 4, 5, 6];

let evenArr = a1.filter((val) => {
    return val%2 == 0;
});
console.log(evenArr);

//reduce method -> 
let a2 = [1, 2, 3, 4, 5, 6];

const aSum = a2.reduce((res, curr) => {
    return res+curr;
}); 
console.log(aSum);


  // arguments -> array like object
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[2]);
}

add(1, 2, 3, 4, 5);