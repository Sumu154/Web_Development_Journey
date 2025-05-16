// 1. implicit binding
// 2. explicit binding
// 3. new binding
// 4. window binding
 

// jodi 1,2,3 konotai na hoy then eta global ke point korbe..means window
const printName = function(){
  console.log(this);  // this ekahne ekta window
  console.log(this.name);
};

const Sumaiya = {
  name: "Sumaiya",
}

printName();