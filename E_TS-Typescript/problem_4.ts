{
  class Vehicle {
    constructor(
      private make: string,
      private year: number,
    ){}

    getInfo () {
      console.log(`"Make: ${this.make}, Year: ${this.year}"`)
    }
  }

  class Car extends Vehicle {
    constructor(
      make: string,
      year: number,
      private model: string
    ){ super(make, year)};


    getModel ()  {
      console.log(`"Model: ${this.model}"`)
    }
  }



  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
  myCar.getModel();  // Output: "Model: Corolla"
}