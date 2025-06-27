// 1) array
const ar1 = [1, 2, 3, 4, 5];
console.log(...ar1);          // number gulake individually extract kore
const ar2 = [...ar1, 6, 7];
console.log(ar2);

// 2) object 
const obj1 = {a:1, b:2};
//console.log(...obj1);    //erroe dekhabe -> object evabe dekha jay na
console.log(...Object.entries(obj1));   // eta error dekhabe na
const obj2 = {...obj1, c:3};
console.log(obj2);

// 3) string character
const str = "Sumaiya";
const chars = [...str];   // char extract kore shb chars array te rakhte hbe
console.log(...str);


// 4) set 
const set = new Set([1,2,3,3]);
const st = [...set];    // array te dhukaite pari
console.log(...set);  // or emne extract koreo print korte pari


// 5) map
const map = new Map([['a', 1], ['b', 2]]);
const mp = [...map];       // array te dhukaite pari
console.log(...mp);        // or emne extract koreo print korte pari