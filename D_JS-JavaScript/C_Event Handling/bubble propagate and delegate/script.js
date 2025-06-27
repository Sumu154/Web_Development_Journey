// event bubble propagate
document.getElementById('item-2').addEventListener('click', function(){
    console.log('item-2 clicked');
})

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('list clicked');
})

document.getElementById('section').addEventListener('click', function(){
    console.log('section clicked');
})

// output 
// item-2 clicked
// list clicked
// section clicked

// for this kind of bubble use propagation
document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 clicked');
    event.stopPropagation();      //
    event.stopImmediatePropagation();    //
})



// delegate
