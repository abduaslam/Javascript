//excute event listener using function 
let btn2=document.querySelector(".box2");
 function greeting(){
console.log('Hello my friend this is my first event listener');

};
btn2.addEventListener('click',greeting)


//mouseover

let btn3=document.querySelector('.box3');
function mouseOver(){
    btn3.style.backgroundColor='blue';
}

btn3.addEventListener('mouseover',mouseOver)