let turnOn=document.getElementById('on');
let turnOff=document.getElementById('off')
let imge=document.getElementById('img')
let onBtn=document.getElementById('onBtn')
let offBtn=document.getElementById('offBtn')

 offBtn.addEventListener('click',()=>{
  imge.src='./darkBulb.jpg'
  imge.style.backgroun="green"
 })

  onBtn.addEventListener('click',()=>{
  imge.src='./lightBulbs.webp'
 })