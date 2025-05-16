/* *******string in javascript******* */

let s1 = "sumaiyatasnim";
console.log(s1.length);
console.log(s1[8]);


      //string method
let s2 = "  sumaiyaTasnim";

  // includes -> string e oi char ace kina
console.log(s1.includes('y'));

  // upper lower case
console.log(s2.toUpperCase());
console.log(s2.toLowerCase());

  // trim korbe space gula       
console.log(s2.trim());     //trim korbe first and last faka space gula
console.log(s2.trimEnd());
console.log(s2.trimStart());


console.log(s2.slice(1, 5));   //majher jekono part likha jabe

console.log(s1.concat(s2));
console.log(s1+s2);

console.log(s2.replace("sumaiya", "rohan"));
console.log(s2.charAt(5));

  // split -> majhe majhe vag korbe
let sent = 'I am a good and hardworking person';
console.log(sent.split(' '));

  // join - jei char dibo oita diye pura array of string ke join kore dibe
let a = ['sumaiya', 'rohan', 'dudu', 'bubu'];
console.log(a.join('-'));




  //string reverse technique
let revSent = sent.split('').reverse().join('');
console.log(revSent);


  // special ``
const num1=5, num2=7;
const ans = `The sum of ${num1} and ${num2} is ${num1+num2}`;
console.log(ans);
