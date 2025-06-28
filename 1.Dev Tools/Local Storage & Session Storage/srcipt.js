// setItem
localStorage.setItem('name', 'Sumaiya');
localStorage.setItem('bf', 'Rohan');

//getItem
console.log(localStorage.getItem('name'));

  // with promt
let key = prompt('Enter key: ');
let value = prompt('Enter value: ');

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

console.log(localStorage.key(0));

//removeItem
// localStorage.removeItem('name');

// //clear
// localStorage.clear();


// stringify and json
const obj = {
  id: 210041154,
  name: 'Sumaiya',
}

localStorage.setItem('obj', JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem('obj')));
