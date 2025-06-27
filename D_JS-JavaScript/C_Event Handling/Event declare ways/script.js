// event manage/declare -> 5 ways(1, 5 amra beshi use korbo)

  // 1) inline declare -> html ei likhe felbo
//<button onclick="document.body.style.backgroundColor = 'yellow'"> Click me! </button>

  // 2) function diye declare
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

  // 3) id, class, tag diye select kore
const button1 = document.querySelector('#btn-orange');
button1.onclick = makeOrange;
function makeOrange(){             // regular function
    document.body.style.backgroundColor = 'orange';
}

button1.onclick = function makeOrange() {          // arrow function 
    document.body.style.backgroundColor = 'orange';
}


  // 4) id, class, tag diye dhore eventlistener 
const button2 = document.querySelector('#btn-pink');
button2.addEventListener('click', function makePink(){             // regular function
    document.body.style.backgroundColor = 'pink';
})


  // 5) shb ekbare ek line e korbo
document.querySelector('#btn-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})



