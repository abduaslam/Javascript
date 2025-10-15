console.log("hello this my data type")

console.log("there are two type of data types in javascript primitive and non primitive data types")

let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25
}; // ob

let colors = ["red", "green", "blue"]; // Array is an object

function greet() { // Function is an object
    console.log("Hi!");
}
colors.pop(colors[2])
console.log("How to get data from object")
console.log(person)
console.log(person.firstName)



console.log("How to get data from array")
colors.push("gray" ,"white","purpel")
console.log(colors)
console.log(colors[0])
console.log(colors[colors.length-1])

for(let i=0;i<colors.length;++i){
    if(i>1 && i<3){
        console.log("hello" +" "+i)
    }
    else{
        console.log("morning"+" "+ i)
    }
}









