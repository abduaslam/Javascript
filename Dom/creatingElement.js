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

