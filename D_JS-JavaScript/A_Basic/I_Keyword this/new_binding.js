// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4. window binding


// 3. new binding
// used specially with function and classes
function Person(name, age){    // it is mainly a constructor function
  this.name = name;            // constructor function is similar to a class
  this.age = age;

  console.log(`${this.name} is ${this.age} years old`);
}

const Sumaiya = new Person('Sumaiya', 21);
console.log(Sumaiya);



// that constructor function has the same behavior of this class..this class also a new binding 
class Person2 {
  constructor(name, age) {
      this.name = name;
      this.age = age;
      console.log(`${this.name} is ${this.age} years old`);
  }
}

const Sumaiya2 = new Person2("Sumaiya2", 21);
console.log(Sumaiya2); 
