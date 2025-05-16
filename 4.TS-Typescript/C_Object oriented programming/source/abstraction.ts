// abstraction
{
  // abstract using interface
  interface Animal{
    makeSound: () => void;
  }
  
  class Dog implements Animal{
    makeSound = (): void => {
      console.log("Woof!");
    };
  }
  
  class Cat implements Animal{
    makeSound = (): void => {
      console.log("Meow!");
    };
  }
  
  const dog = new Dog();
  const cat = new Cat();
  
  dog.makeSound(); // Woof!
  cat.makeSound(); // Meow!
  
}

{
  // using abstract class
  abstract class Vehicle{
    constructor(
      public name: string
    ) {}
  
    abstract startEngine: () => void;
  
    showName = (): void => {
      console.log(`This is a ${this.name}`);
    };
  }
  
  class Car extends Vehicle{
    startEngine = (): void => {
      console.log("Car engine started 🚗");
    };
  }
  
  class Bike extends Vehicle{
    startEngine = (): void => {
      console.log("Bike engine started 🏍️");
    };
  }
  
  const car = new Car("Toyota");
  const bike = new Bike("Yamaha");
  
  car.showName();      // This is a Toyota
  car.startEngine();   // Car engine started 🚗
  
  bike.showName();     // This is a Yamaha
  bike.startEngine();  // Bike engine started 🏍️
  
}