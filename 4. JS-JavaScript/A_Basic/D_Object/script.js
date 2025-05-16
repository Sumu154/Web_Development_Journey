//template literals 
let person = {
  name: 'Sumaiya',
  age: 21,
  profession: "student",
  salary: 25000,
  status: 'mingle',
  hobby: ['phn tipa', 'movie', 'gardening']
}
console.log(person);
console.log(person.hobby[1]);

  // access kora -> 2 ways
console.log(person.profession);
console.log(person['profession']);

let output = `${person.name} is ${person.status} now`;
console.log(output);

  // keys and values check kora jay
console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.entries(person));


  // deleet a property
delete person.status;
console.log(Object.entries(person));

  // destruction diye -> one or more property bad diye new object banano
const {hobby, ...rest} = person;
console.log(rest);
console.log(Object.entries(rest));

  // freeze
Object.freeze(person);   // -> freeze korle ar kono value change, add kora jabe na
Object.seal(person);     // -> value change kora jabe kintu property add remove kora jabe na


    /* nested object */
let car = {
  name: 'Toyota',
  price: 25000,
  person: 'two',
  unique: {
      color: 'blue',
  }
}
console.log(car.unique.color);




  // loop through object
for(let i in car){
  console.log(i);
  console.log(car[i]);
}


  // many types of property of object
const student = {
  name: 'Sumaiya',
  id: 210041154,
  address: 'dhaka',
  isSingle: false,
  friend: ['saif', 'rohan', 'slona'],
  movies: [{name: 'Bahubali', year: 2012}, {name: 'KGF', year: 2021}],
  act: function(){
    console.log('car like aeroplane');
  },
  car: {
    brand: 'tesla',
    price: 200000000,
  }
}

console.log(student.car);
console.log(student.act);
student.act();



            /**** Array of object -> applying all array method here  ****/
const product = [
  {id:1, name:'lenovo', price:150000},
  {id:2, name:'macbook', price:160000},
  {id:3, name:'hp', price:15000},
  {id:4, name:'dell', price:50000},

]

//1) forEach  -> nothing return..some specific task kore
console.log("forEach method: " );
product.forEach((i) => {
  console.log(i.name);
})

//2)map -> iterate kore kaj kore oi array take(new array abnaye) return kore
const names = product.map((i) => {
  return i.name;
})
console.log("map method: " );
console.log(names);

//3)filter -> condition er opor base kore jara passed hbe oi value gula diye array banaye return korbe
console.log("filter method: " );
const priceHigh = product.filter((i) => {
  return i.price>50000;
}) 
console.log(priceHigh);

//4)find -> condition er opor base kore jara passed hbe oi value gular moddhe first tare return korbe
console.log("find method: " );
const priceLow = product.find((i) => {
  return i.price<50000;
}) 
console.log(priceLow);

//5)some -> condition jekono ekta pass holei true and na pass hole false return korbe
console.log("some method: " );
const hasHigh = product.some((i) => {
  return i.price>50000;
}) 
console.log(hasHigh);

//6)some -> condition jekono ekta pass holei true and na pass hole false return korbe
console.log("every method: " );
const hasAllHigh = product.every((i) => {
  return i.price>50000;
}) 
console.log(hasAllHigh);

//7)reduce -> shb element niye kicu operation kore ekta value e niye asha
console.log("reduce method: " );
const total = product.reduce((sum, i) => {
  return sum+i.price;
}, 0)        // 0 ekhane initial value
console.log(total)

