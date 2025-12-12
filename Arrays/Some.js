// The some() method in JavaScript is an array method that tests whether at least one element in the array 
// satisfies the condition implemented by the provided callback function.
//  It returns a boolean value: true if at least one element passes the test, 
//  and false otherwise. 
let elements=[2,3,4,5,6,7,8,10];
console.log(elements.some(x=> x<1));
console.log(elements.some(x=> x===5));