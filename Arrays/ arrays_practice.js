//Q1. What is an array in JavaScript?
//Arrays are non_primitive datatype javascript are hlep to store differen data type


// Q2. How do you create an array?

//1. array literal:it use squear brakets to create array like empty , with intial element,with different data types
console.log("// Q2. How do you create an array?")
console.log("1. array literal:")
let aara=[];
let aara1=[12,34,57];
let aara2=[12,56,"school",false,{name:"abdu",age:26}];

console.log("1. array literal:");











// Q3. What data types can you store inside an array?
//Create one array that mixes numbers, strings, and booleans.
let arr=[12,14,45,"abdu","omer",true,false,12]


//Q4. What is the difference between an array and a single variable?
//Explain in your own words and give one code example to support your answer.

//answer all of the store data the differences are single variable can store only one value
//but the arr can store different type of value
let single=76;
arrayData=[23,78,"hello",false];



//Q5. How do you access specific items from an array?
//Write a program that prints the first and last elements of your array.
let firstElement=arrayData[0];
console.log(firstElement);
let lastEliement=arrayData[arrayData.length-1];
console.log(lastEliement);



//Q6. How do you change a value in an array?
//Change one of the elements in your array and print the new array.
console.log("Q6. How do you change a value in an array?")
let arrayy=[34,56,8,90,23,12]
arrayy[2]=10;
console.log(arrayy);


//Q7. What does .length do?
//Write a program that shows how many items aarrayString.()re in your array.

// answer to Know the length of array
console.log("Q7. What does .length do?,Write a program that shows how many items aarrayString.()re in your array.")
let aarrayString=[1,3,4,2,6,8,9,0,2,3,7,1,11,56,90]
console.log(aarrayString.length);




//Q9. Write a program that prints all elements in an array using three different loops:
console.log("for loop")
let arr1=[12,23,34,45,56,67,78,89,90]
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

// console.log("while loop")
// arr1=[12,23,34,45,56,67,78,89,90]
// let a=3;
// while(a<arr1[arr1.length]){
//         console.log('gg')
        
// }

//Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.
console.log("Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.")

let arr2=[2,3,4,5,6,7,8,9,10]
let  newarray=[];.toLocaleUpperCase
for(let i=1;i<arr2.length;i++){
   
      newarray.push(arr2[i]*2);
}
console.log(newarray);


//Q11. Create an array of names and print each name in uppercase using a loop.
console.log("Q11. Create an array of names and print each name in uppercase using a loop.")
let arrayString=['moneim', 'abdu',"mojahed"];
for(let i=0;i<arrayString.length;i++){
  
    const arrString=arrayString[i].toUpperCase();
   console.log(arrString);
}




//Q13. Create an array of numbers and use a loop to find the largest and smallest number.
console.log("Q13. Create an array of numbers and use a loop to find the largest and smallest number.")

let arraa=[2,8,4,5,6,10,20,9,15];
let largest=arraa[0];
let smallest=arraa[0];

for(let i=0;i<arraa.length;i++){
 if(arraa[i]>largest){
    largest=arraa[i];
 }
 else if(arraa[i]<smallest){
    smallest=arraa[i]
 }
}
console.log(`the lagest number is :${largest} the smallest number is :${smallest}`);

console.log("another way to solve this problem.")
 arraa=[2,8,4,5,6,10,20,9,15];
 largest=Math.max(...arraa);
 smallest=Math.min(...arraa)

 console.log(`the lagest number is :${largest} the smallest number is :${smallest}`);







