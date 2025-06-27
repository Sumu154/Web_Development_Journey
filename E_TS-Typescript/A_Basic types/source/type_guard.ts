// type guards -> two ways
{
  // typeof 
  const printValue = (value: string | number): void => {
    if(typeof value === "string"){
      console.log(value.toUpperCase());
    }
    else{
      console.log(value.toFixed(2));
    }
  }
  printValue("hi");


  // in
  type Dog = { bark: () => void };
  type Cat = { meow: () => void };

  const makeSound = (animal: Dog | Cat): void => {
    if("bark" in animal){
      animal.bark();
    } 
    else{
      animal.meow();
    }
  };
  // Sample Dog object
  const dog: Dog = {
    bark: () => console.log("Woof!")
  };

  // Sample Cat object
  const cat: Cat = {
    meow: () => console.log("Meow!")
  };

  // Call the function with proper objects
  makeSound(dog); // Output: Woof!
  makeSound(cat); // Output: Meow!

  
}