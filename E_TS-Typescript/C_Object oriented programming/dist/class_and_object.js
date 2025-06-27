"use strict";
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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printStudent() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const student1 = new Student("sumaiya", 23);
// array of object
let students = [];
students.push(student1);
