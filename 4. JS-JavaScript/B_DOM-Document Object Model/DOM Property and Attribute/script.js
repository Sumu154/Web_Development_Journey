console.log('hello');
window.console.log('hello');
alert('this is a alert');


  //document er property er html object dekhabe
console.log(document);
  // document er vitor property dekhabe
console.dir(document);



// DOM er element dhora or select -> 5 ways
  // 1)getElementById -> Id dhore 
console.log(document.getElementById('heading'));

  // 2)getElementsByClassName
console.log(document.getElementsByClassName('para'))

  // 3)getElementsByTagName
console.log(document.getElementsByTagName('p'));

  // 4)querySelector -> anything can be passed
console.log(document.querySelector('p'));    // -> first matching element
console.log(document.querySelectorAll('p'));    // -> all matching element return korbe

console.log(document.querySelector('#heading'));    // -> first matching element

console.log(document.querySelector('.para'));    // -> first matching element
console.log(document.querySelectorAll('.para'));


// DOM Properties 
  // 1) TagName  -> id or class niye tar tagname diye dibe
const firstEl = document.querySelector('#heading');
console.log(firstEl.tagName);

const secondEl = document.querySelector('.para');
console.log(secondEl.tagName);

  
  // 2) innerText -> returns text content of elements and its children
  // 3) innerHTML -> return html content of elements and its children
const thirdEl = document.querySelector('h4');
console.log(thirdEl.innerText);
console.log(thirdEl.innerHTML);

thirdEl.innerText = 'inner text change hua na';
console.log(thirdEl.innerText);
thirdEl.innerHTML = '<div> inner text change hua na </div> '
console.log(thirdEl.innerHTML);

  // 4) textContent -> same as innerText but hidden element o dekha jay



// DOM Attributes
let hd = document.querySelector('#heading');   // h1 er jonne -> heading id ta or ekta attribute
console.log(hd);    // so ekahen hd ekta object jeta queryselector return korce

  // 1) getAttribute() -> to get the attribute value
let attribute = hd.getAttribute('id');
console.log(attribute);    // now hd object tar id ekta attribute...getAttribute id er value=heading return korce

  // 2) setAttribute() -> to set the attribute value
hd.setAttribute('id', 'newHeading');
attribute = hd.getAttribute('id');
console.log(attribute)



// Style -> shb style e javascript diye change kora jay
let obj = document.querySelector('.para');
console.log(obj);
obj.style.color = 'green';

  // classlist dekha jay kono object er,,then add or remove o kora jay
console.log(obj.classList);
obj.classList.add('blue-bg');
obj.classList.remove('blue-bg');


// Insert elements -> two steps
 //  1)firste create koro new element -> document.craeteElement()
let newEl = document.createElement('h1')  // new element ekta h1 hbe,,mane tag gula dite hbe
newEl.innerHTML = '<i> Hi, I am new heading </i>';

  // 2)then add koro  -> 4 ways to add element
let bodyEl = document.querySelector('body');    // -> parent node tar access nilam

    // a) append -> last e add(vitrore)
bodyEl.append(newEl);
    // b) prepend -> start e add(vitore)
bodyEl.prepend(newEl);
    // c) before  -> opore add(baire)
bodyEl.before(newEl);
    // c) after  -> opore add(baire)
bodyEl.after(newEl);



// Delete elements -> 
let delEl = document.querySelector('button');
delEl.remove();



// Loop over DOM element
const listEl = document.getElementsByTagName('li');
console.log(listEl);
for(const i of listEl){
  i.style.backgroundColor = 'red';
  i.style.margin = '10px';
}



