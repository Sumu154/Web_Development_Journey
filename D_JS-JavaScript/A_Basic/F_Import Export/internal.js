// 1.named export

  // variable import in variable
// import {pi, a} from './external.js'
// console.log(pi, a);

  // all import as object
import * as test from './external.js'
console.log(test);         // as a object return hbe
console.log(test.pi, test.a);

//   // function import
import { myFunc } from './external.js';
myFunc();


//2. default import
import external from './external.js'
console.log(external);          //external er vitor default chole ashbe








