{
  class Dog {
    bark = () => {
      console.log("Woof!");
    }
  }
  
  class Cat {
    meow = () => {
      console.log("Meow!")
    }
  }
  
  const makeSound = (animal: Dog | Cat): void => {
    if(animal instanceof Dog){
      animal.bark();
    } 
    else{
      animal.meow();
    }
  };
  
  const dog1 = new Dog();
  const cat1 = new Cat();
  
  makeSound(dog1); // Output: Woof!
  makeSound(cat1); // Output: Meow!
  
}