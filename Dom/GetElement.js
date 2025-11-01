   //Git element by Id   pragraph.style.color='red';
     console.log(document.getElementById('element1'))
     //Get Element by class name
     let ByElement=document.getElementsByClassName("element");
     console.log(ByElement)
     // Get ELement by tag name
     let ByTag=document.getElementsByTagName("div")
     console.log(ByTag)

     //Get element using QuerySlector
     let BySlector=document.querySelector(".element");
     console.log(BySlector);
     // Get element by querySelectorAll
     let SelectorAll=document.getElementsByTagName("p");
     console.log(SelectorAll);

     // Style puporeties 
     console.log(" Style puporeties ")
    let pragraph=document.querySelector('.element')

pragraph.style.color='red'
for (let i=0;i<ByElement.length;i++){
ByElement[i].style.color='green'
ByElement[i].style.fontSize='20px'

}

