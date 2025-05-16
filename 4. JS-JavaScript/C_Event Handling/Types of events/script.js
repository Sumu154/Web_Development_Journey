// 1) mouse event
  // mousedown -> mousedown korle kaj hbe
  document.querySelector('#btn-mousedown').addEventListener('mousedown', function(){
    console.log('Thank you for mousedown!');
})
  // mouseup -> mouseup korle kaj hbe
  document.querySelector('#btn-mouseup').addEventListener('mouseup', function(){
    console.log('Thank you for mouseup!');
})
  // click -> mouse click korle triggerd -> up or down er shomonnoy
document.querySelector('#btn-click').addEventListener('click', function(){
    console.log('Thank you for clicking me!');
})
  // dblclick -> double click korle kaj hbe
document.querySelector('#btn-dblclick').addEventListener('dblclick', function(){
    console.log('Thank you for double clicking me!');
})
  // mouseover -> double click korle kaj hbe
  document.querySelector('#btn-mouseover').addEventListener('mouseover', function(){
    console.log('Thank you for coming on me!');
})

  // mousemove -> mouse move korle 
document.querySelector('#btn-mousemove').addEventListener('mousemove', function(){
    console.log('Thank you for moving on me!');
})
  // mouseover -> double click korle kaj hbe
  document.querySelector('#btn-mouseout').addEventListener('mouseout', function(){
    console.log('Thank you mouse shoranor jonne!');
})


// 2) keyboard event
document.querySelector('#text-keydown').addEventListener('keydown', function(input){
    console.log(input.target.value);
})
document.querySelector('#text-keyup').addEventListener('keyup', function(input){
    console.log(input.target.value);
})
document.querySelector('#text-keypress').addEventListener('keypress', function(input){
    console.log(input.target.value);
})


// 3) focus event
document.querySelector('#text-field').addEventListener('focus', function(){
    console.log('input field is focused');
})
document.querySelector('#text-field').addEventListener('blur', function(){
  console.log('input field lost focus');
})

// 4) 



