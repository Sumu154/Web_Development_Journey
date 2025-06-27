// polymorphism
{
  class Animal {
    makeSound = (): void => {
      console.log("Some generic animal sound");
    };
  }
  
  class Dog extends Animal {
    makeSound = (): void => {
      console.log("Woof!");
    };
  }
  
  class Cat extends Animal {
    makeSound = (): void => {
      console.log("Meow!");
    };
  }
  
  const animals: Animal[] = [new Dog(), new Cat(), new Animal()];
  
  animals.forEach(it => {
    it.makeSound(); // Each one behaves differently
  });
  
}