//there are many way to create object

//1 using litral 
let house={
    weidth:120,
    height:190,
    rooms : 5

}
// 2th way using new Object mothed
house=new Object({
     weidth:120,
    height:190,
    rooms : 5
 
});

//3th using object.fromEntire

const fruits = [
["apples", 300],
["pears", 900],
["bananas", 500]
];
console.log(fruits)
let myNewObject=Object.fromEntries(fruits)
console.log(myNewObject)


// 4th object.assign

myfinalProject=Object.assign(myNewObject)

console.log(myfinalProject)

