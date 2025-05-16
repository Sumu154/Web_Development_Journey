"use strict";
console.log('hello');
// data type declare
let username = "Sumaiya";
let age = 23;
let isMern = true;
let password = "abc";
// enum type
var RType;
(function (RType) {
    RType[RType["Success"] = 0] = "Success";
    RType[RType["Failure"] = 1] = "Failure";
    RType[RType["Unauthenticated"] = 2] = "Unauthenticated";
    RType[RType["Forbidden"] = 3] = "Forbidden";
})(RType || (RType = {}));
;
console.log(typeof password, typeof username);
let anything = "hello";
anything = 123;
anything = true;
// anything hole reassign kora jabe
// arrays
let fruits = ["apple", "banana", "orange"];
let scores = [70, 90, 80];
scores.push(100);
const newScores = scores.map(it => {
    return it * 2;
});
console.log(scores);
console.log(newScores);
let user = [1, "sumaiya"];
// array operations
fruits.forEach((it) => {
    return it;
});
// functions in ts
const greet = (name) => {
    return `hello ${name}`;
};
const greetUser = (name, age) => {
    return `hello ${name}. You are ${age} years old`;
};
const user1 = {
    name: "sumaiya",
    age: 23,
};
const person1 = {
    name: "sumaiya",
    age: 23
};
