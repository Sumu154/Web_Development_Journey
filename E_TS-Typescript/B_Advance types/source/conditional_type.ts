{
  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  // with generic constraint
  type Sheikh = {
    bike: string;
    car: string;
    ship: string
  }

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  // console.log(CheckVehicle<"bike">) // kaj korbe na karon eta ekta type runtime value
  type Result1 = CheckVehicle<"bike">; // true
  type Result2 = CheckVehicle<"train">; // false


}


// use conditional types
{
  type Sheikh = {
    bike: string;
    car: string;
    ship: string
  }

  
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  const isAllowedVehicle = <T extends string>(vehicle: T): CheckVehicle<T> => {
    return (["bike", "car", "ship"].includes(vehicle) as unknown) as CheckVehicle<T>;
  };

  console.log(isAllowedVehicle("bike")); // true
  console.log(isAllowedVehicle("train")); // false (at runtime)

}