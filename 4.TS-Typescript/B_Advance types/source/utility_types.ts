// utility types
{
  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string
  }

  type Name = Pick<Person, "name">
  type NameAge = Pick<Person, "name"|"age">

  type ContactInfo = Omit<Person, "name"|"age">

  type PersonRequired = Required<Person>

  type PersonPartial = Partial<Person>

  type PersonReadOnly = Readonly<Person>

  const person1: PersonReadOnly = {
    name: "sumaiya",
    age: 23,
    contact: "01399284",
  }
  // person1.name = "rohan" // not possible edit -> read only

  
}

