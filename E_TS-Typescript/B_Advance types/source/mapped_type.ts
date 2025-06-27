// mapped types
{
  type Person = {
    name: string;
    age: number;
    isStudent: boolean;
  };

  // make all to string
  type AllString<T> = {
    [key in keyof T]: string;
  }
  
  type AllOwn<T> = {
    [key in keyof T]: T[key];
  }

  type PersonAllString = AllString<Person>;
  type PersonAllOwn = AllOwn<{name: string; age: string; isStudent: number}>;
 

  // **lookup type
  type Name = Person["name"];
}