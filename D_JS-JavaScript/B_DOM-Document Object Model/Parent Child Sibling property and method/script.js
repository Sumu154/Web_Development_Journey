console.log(document.body);


    /* -------- Properties  ------- */ 

// body er child gula 
console.log(document.body.childNodes);  // -> included text, comment, element
console.log(document.body.children);    // -> only HTML collection


const div = document.querySelector('.container');
console.log(div);

console.log(div.childNodes);     // -> included text, comment, element
console.log(div.children);       // -> only HTML collection
console.log(div.parentNode);     // -> parent node included text, comment, element
console.log(div.parentElement);  // -> only HTML parent node

// children
console.log(div.firstChild);     // -> text return korlo
console.log(div.firstElementChild);   // html er first div return korbe

console.log(div.lastChild);      // -> text return
console.log(div.lastElementChild);   // html er last div return korbe

console.log(div.childNodes[1]);
console.log(div.children[1]);

  // loop over the child
for(const i of div.children){
    console.log(i);
}

console.log(div.childElementCount);


// sibling nodes and element
const box3 = document.querySelector('#box3');
console.log(box3);

console.log(box3.previousSibling);    // -> included text, comment element
console.log(box3.nextSibling);        // so era text return korce

console.log(box3.previousElementSibling);     // only html element 
console.log(box3.nextElementSibling);         // so era box2 and box4 return korce




      /* --------- method --------- */

// parent.method(child)
const parent = document.getElementsByClassName('container')[0];
console.log(parent);
   // new element banaye ni
const newEl = document.createElement('div');
newEl.innerText = 'div-new';
newEl.classList.add('box');
console.log(newEl);

  // 1) appendChild -> parent er last child er pore add hbe
parent.appendChild(newEl);
console.log(parent);

  // 2) cloneNode ->
const clone = newEl.cloneNode(true);
console.log("clone node: ", clone);

  // 3) replaceChild -> parent er last child er pore add hbe
const lastEl = document.createElement('div');
lastEl.innerText = 'div-last';
lastEl.classList.add('box');
parent.replaceChild(lastEl, newEl);
console.log(parent);

  // 4) removeChild -> parent er last child er pore add hbe
// parent.removeChild(lastEl);
// console.log(parent);

  // 5) insertBefore -> 
console.log("box3", box3);
parent.insertBefore(clone, box3);
console.log("box3 er age clone node", parent);
