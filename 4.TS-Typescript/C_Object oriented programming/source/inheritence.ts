{
  class Animal {
    constructor (
      public name: string,
      public age: number,
    ) {}


    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Barkkkk!");
    }
  }

  class Cat extends Animal {
    makeSound() {
      console.log("Meowwww!");
    }
  }
  
  const dog1 = new Dog("rohan", 23);
  dog1.makeSound(); 
  const cat1 = new Cat("sumaiya", 23);
  cat1.makeSound(); 
  
}