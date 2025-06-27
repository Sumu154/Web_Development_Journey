/* *******arrays in javascript******* */
let a = [1, 2, 3, 4, 5];
let b = [7, 8, 9, 10, 11];
console.log(a);
a[2] = 100;
console.log(a);


                //**  loops in array  **//
for(let i=0 ; i<a.length ; i++){
    console.log(a[i]);
}
for(let i of a){
    console.log(i);
}

     
                //**  methods in array  **//
//1) isArray - array kina check
console.log(Array.isArray(a));


//2) includes - value array te ace kina
console.log(a.includes(5));

//3) indexOf - value ta array er kon position e ace
console.log("index of 5 ", a.indexOf(5));

//4) push - end e ekta value push kore
//5) unshift - start e ekta value push
a.push(6);
a.unshift(0);
console.log(a);

//6) pop - end theke value pop kore then oita return kore
//7) shift - start e ekta value pop then return
console.log(a.pop());
console.log(a.shift());

//8) string e convert korbe
console.log("a concat b:")
console.log(a.concat(b));

//8) string e convert korbe with some extra
console.log("string of the array with - : ")
console.log(a.join('-'));


//9) slice -  kicu part print korte chai
console.log(a.slice(2, 5));  
console.log()   // mane pura array return korbe,,so ara jodi kono array er copy korte chai tahole possible

//10) splice - add, remove, replace kaj korte pare
  //10.1) add
a.splice(1, 0, 101, 102);
console.log(a);

  //10.2) delete
a.splice(1,2);
console.log(a);

  //10.3) update - delete+add
a.splice(1, 1, 102);
console.log(a);


      
                //** some other methods in array  **//
const ar = [1,2,3,4];
//1) forEach  -> nothing return..some specific task kore
console.log("forEach method: " );
ar.forEach((i) => {
  console.log(i*2);
})

//2)map -> iterate kore kaj kore oi array take(new array abnaye) return kore
const doubled = ar.map((i) => {
  return i*2;
})
console.log("map method: " );
console.log(doubled);

//3)filter -> condition er opor base kore jara passed hbe oi value gula diye array banaye return korbe
console.log("filter method: " );
const even = ar.filter((i) => {
  return i%2===0;
}) 
console.log(even);

//4)find -> condition er opor base kore jara passed hbe oi value gular moddhe first tare return korbe
console.log("find method: " );
const evenFirst = ar.find((i) => {
  return i%2===0;
}) 
console.log(evenFirst);

//5)some -> condition jekono ekta pass holei true and na pass hole false return korbe
console.log("some method: " );
const hasEven = ar.some((i) => {
  return i%2===0;
}) 
console.log(hasEven);

//6)every -> condition shb pass korle true and na pass hole false return korbe
console.log("every method: " );
const hasAllEven = ar.every((i) => {
  return i%2===0;
}) 
console.log(hasAllEven);

//7)reduce -> shb element niye kicu operation kore ekta value e niye asha
console.log("reduce method: " );
const total = ar.reduce((sum, i) => {
  return sum+i;
}, 0)        // 0 ekhane initial value
console.log(total)




  // sort the array
let c = [2, 5, 8, 1, 9, 3];
console.log(c.sort(function(a,b){
  return a-b
})); 
console.log(c.sort(function(a,b){
  return b-a
})); 


