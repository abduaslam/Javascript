let container=document.querySelector(".container");
let ul=document.querySelector(".parent-list");
let li=document.querySelector(".ul-child");


li.addEventListener('click',()=>{
    console.log('liClicked')
})
ul.addEventListener('click',()=>{
    console.log('ulClicked')
},true)


container.addEventListener('click',()=>{
    console.log('conainerClicked')
},true)