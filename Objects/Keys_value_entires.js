
// let person ={
//     name:'abdu',
//     Id:1001,
//     habbits:['playing','runing','watshing'],
//     active:true
// }
// console.log(Object.values(person))
// console.log(Object.keys(person))
// let newObject=Object.entries(person);

// for (let [x,y] of newObject){
//     console.log(`${x} : ${y}`);
// }

// //using  'this ' in mothed in javascript
// let car={
//     name:'abdu',
//     age:28,
//     country:'sudan',
//     model:function(x,y){
//         console.log(`my name is ${this.name},my age ${this.age},I am from ${this.country}`);
//         console.log(`the vales is = ${eval(x + y)}`)
//     }
// } 
// console.log(car.model(5,10));


let user={
    name:'dfkuw',
    age:29

}
for (let key in user ){
    console.log(`${key} : ${user[key]}`)
}




