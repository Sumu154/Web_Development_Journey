// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4. window binding

// 2. explicit binding

     // call() Vs apply() Vs bind() 
const printName = function(){            // function(a) -> apply use korle array nite parbo
  console.log(this.name);
}

const Sumaiya = {
  name: 'Sumaiya',
  age: 21,
}

  // call()
printName.call(Sumaiya);        // ami bole dicchi this hishabe Sumaiya object ke use koro

  //apply()
const a = ['handsome', 'beautiful'];
printName.apply(Sumaiya, a)  // apply diye evabe array pass korte pari
  
  //bind()
const func = printName.bind(Sumaiya, a);     // function take recive kore 
func();