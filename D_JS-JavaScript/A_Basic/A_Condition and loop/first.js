//conditional statement
let mode = "light";
let color;

if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}

console.log(color);

//loops
for(let i=1 ; i<=5 ; i++){     //normal loop
    console.log("sumaiya");
}

let a = [1, 2, 3, 4, 5];
for(let i=0 ; i<a.length ; i++){
    console.log(a[i]);
}
for(let i of a){
    console.log(i);
}
 
//string er jonne 
let s = "sumaiyaTasnim";
for(let i of s){              
    console.log("i=", i);
}

console.log(s.length);

//object er jonne
let student = {
    name: "sumaiya",
    id: 210041154,
    cgpa: 3.77,
}
for(let i in student){
    console.log("key=", i, "value=", student[i]);
}


//example
let gameNum = 25;
let userName = prompt("Guess the game number: ");
while(userName != gameNum){
    userName = prompt("you entered wrong number, Guess agaim...")
}
console.log("Congratulations, you entered right number");









