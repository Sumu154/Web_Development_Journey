// Base class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentInfo() {
    return `${this.getInfo()}, Student ID: ${this.studentId}`;
  }
}

const person = new Person('John Doe', 40);
console.log(person.getInfo()); 

const student = new Student('Jane Doe', 20, 'S12345');
console.log(student.getStudentInfo()); 
