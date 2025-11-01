//creating element 
let getEle=document.querySelector('#element1');
let newElement=document.createElement('ol')
let newElement1=document.createElement('li')
let newElement2=document.createElement('li');
let newElement3=document.createElement("li")
// adding element 

getEle.append(newElement)
newElement.append(newElement1)
newElement.append(newElement2)
newElement.append(newElement3)

//modifying element
newElement1.innerText="my first list element";
newElement2.innerHTML='my second list element'
newElement3.textContent='my third list element '

// making some style
newElement.style.backgroundColor='#f2d'
newElement1.style.fontSize='20px'
let items=document.querySelectorAll('.element')
console.log(items);
items.forEach(x=>x.style.backgroundColor='#de4')

// modfiying attributes (add and remove class or name)
newElement.classList.add('myOrderList')
// add class name for each li element
const liItems=document.querySelectorAll('li');
liItems.forEach(x=>x.classList.add('Order-element'))


// remove attribute
newElement1.removeAttribute("class")



//remove element
newElement2.remove()




