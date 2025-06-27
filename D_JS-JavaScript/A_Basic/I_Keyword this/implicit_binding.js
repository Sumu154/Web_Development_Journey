// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4. window binding


// 1. implicit binding -> related to object
// jokhn function call hbe as object.method(), 
//JavaScript automatically binds this to the object
 // example 1
const Sumaiya = {
  name: 'Sumaiya1',
  age: 21,
  printName: function(){
    console.log(this.name);     // ei this ei object er name ke bind kore
  }
}

Sumaiya.printName();

  // example 2
const printNameFunction = function(obj){     // ei functioner moddhe jei object ashtece
  obj.printName = function() {     // oitai er kace this
    console.log(this.name);        // i mean this.name bolte oi object er name property bujhay
  }                                 // jokhn jei object ashbe tokhn shei hishebe name this bolte bujhabe
}
const Sumaiya2 = {
  name: 'Sumaiya2',
  age: 21,
}
printNameFunction(Sumaiya2)
Sumaiya2.printName();

//  example 3
const Person = function(name, age){
  return {
    name: name,
    age: age,
    printName: function(){
      console.log(this.name);
    },
  };
};

const Sumaiya3 = Person('Sumaiya3', 21);
Sumaiya3.printName();


