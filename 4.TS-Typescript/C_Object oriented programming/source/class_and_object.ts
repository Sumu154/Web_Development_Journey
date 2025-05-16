// class and object
// way - 1 
// class Student {
//   public name: string;
//   private age: number;

//   // public private readOnly 

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   printStudent = () => {
//     console.log(`${this.name} is ${this.age} years old`);
//   }
// }


//way - 2 -> shortcut -> parameter properties
class Student {
  // public private readOnly 

  constructor (
    public name: string,
    public age: number,
  ) {}

  // Getter for name
  get GetName(): string {
    return this.name;
  }

  // Setter for name
  set setName(newName: string) {
    this.name = newName;
  }

  // Getter for age
  get getAge(): number {
    return this.age;
  }

  // Setter for age
  set setAge(newAge: number) {
    if (newAge > 0) {
      this.age = newAge;
    } else {
      console.log("Age must be positive.");
    }
  }

  printStudent () {
    console.log(`${this.name} is ${this.age} years old`);
  }
}



const student1 = new Student("sumaiya", 23);


// array of object
let students: Student[] = [];
students.push(student1);


