

//Level 4: Array Methods (Basic Operations)
console.log("Level 4: Array Methods (Basic Operations)")
//Q14. What do these array methods do?
console.log("Write code examples for each of the following push ,pop,shift,unshift motheds")

let arrayOne = [12, 56, 78, 'student', 9, 0, 3, 5, 'hello', 45]
arrayOne.push('musa', 34);
console.log(arrayOne);
arrayOne.pop()
console.log(arrayOne);
arrayOne.shift()
console.log(arrayOne);
arrayOne.unshift('omer')
console.log(arrayOne);
console.log("_________________________________________________________________________")

//Q15. How can you find the position of an item in an array?
//Use .indexOf() and .includes().
console.log('%cQ15. How can you find the position of an item in an array?Use .indexOf() and .includes().', 'color:green ;font-size:20px')
let strinng = 'I am abdu aslam yagoub';
console.log(strinng.indexOf('abdu'))
console.log(strinng.indexOf('aslam'))
arrayOne = [12, 87, "sudan", 'rwanda'];
console.log(arrayOne.indexOf('sudan'))
console.log(arrayOne.indexOf(87))
console.log(arrayOne.indexOf('asd'))

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')

//Q16. How can you remove or copy parts of an array?
//Try using .slice() and .splice().
//Explain the difference between them.
console.log('%cTry using .slice() and .splice().', 'color:green;font-size:20px')
arrayOne = ['A', 'B', 'c', 'D', 'E', 'F']
console.log(arrayOne.slice(3, 4));
console.log(arrayOne.slice(2, 4));
console.log(arrayOne.slice(-2));
console.log(arrayOne.slice(2));
//splice
console.log(arrayOne.splice(4));
console.log(arrayOne.splice(2, 4));
console.log(arrayOne.splice(2));
console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q17. How can you combine two arrays together?
//Search and demonstrate using .concat() or the spread operator (...).
console.log("%cSearch and demonstrate using .concat() or the spread operator", 'color:green;font-size:16px');
let numbersOne = [1, 2, 3, 4, 5];
let numbersTwo = [11, 12, 13, 14, 15];
let newNumbers = numbersOne.concat(numbersTwo);
console.log(newNumbers)


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q18. How can you check whether a variable is an array or not?
//Use .isArray() and explain when it’s useful.
//AI Overview
//In JavaScript, Array.isArray() is a static method used to determine whether a given value is an array. It returns true if the value is an array, and false
console.log('%c.isArray() and explain when it’s useful.', 'color:green;font-size:16px')
let ages = [23, 56, 34, 12, 78, 56, 45, 49, 18];






console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q19. How can you reverse the order of items in an array?
//Use .reverse() and print the new order
console.log('%cQ19. How can you reverse the order of items in an array?Use .reverse() and print the new order.', 'color:green;font-size:16px')
ages = [23, 56, 34, 12, 78, 56, 45, 49, 18];
console.log(ages.reverse());

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q20. How can you sort an array of strings alphabetically?
// Use .sort() and print the sorted list.
console.log('%c Use .sort() and print the sorted list.', 'color:green;font-size:16px')
ages = [23, 56, 34, 12, 78, 56, 45, 49, 18];
console.log(ages.sort());

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q22. How can you convert an array into a single string?
//Use .toString() and compare it with .join().
console.log('%cQ22. How can you convert an array into a single string?Use .toString() and compare it with .join().', 'color:green;font-size:16px')
let newarray = ["abdu", 'asalam', 'omer'];
console.log(newarray.join().toString());

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
//Q23. How can you remove a specific item from an array by its name or value?
//Use .indexOf() with .splice() to remove it.
console.log('%c Q23. How can you remove a specific item from an array by its name or value?Use .indexOf() with .splice() to remove it.','color:green;font-size:16px')
let element = ["apple", "banana", "mango", "orange"];

// Remove "mango"
let index = element.indexOf("mango");  // find index of "mango"

if (index !== -1) {  // check if found
  element.splice(index, 1);  // remove 1 element at that index
}

console.log(fruits);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
// Q24. How can you add multiple elements at once to an array?
// Use .push() with multiple arguments or .concat().
let fruits = ["apple", "banana"];
fruits.push("mango", "orange", "grape");

console.log(fruits);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
// Q25. How can you fill an array with the same value?
// Use .fill() to create or update array items.
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 4); // fill 0 from index 1 to 3

console.log(numbers);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
// Q26. How can you find the first and last positions of an element that repeats?
// Use .indexOf() and .lastIndexOf() on an array with repeated values.
let element1 = ["apple", "banana", "mango", "apple", "orange", "apple"];

let first =element1.indexOf("apple");
let last = element1.lastIndexOf("apple");

console.log("First position:", first);
console.log("Last position:", last);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
// Q27. How can you combine all array elements into one string?
// Use .join() to display them in one line separated by commas or spaces.
let element2 = ["apple", "banana", "mango"];
let result =element2.join();

console.log(result);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
// Q28. Create an array of five numbers.
// Add 10 to each number using a loop or .map() and store the results in a new array.

let numbers1 = [5, 10, 15, 20, 25];
let newNumbers1 = [];

for (let i = 0; i < numbers1.length; i++) {
  newNumbers1.push(numbers[i] + 10);
}

console.log(newNumbers1);


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
let ages1 = [12, 17, 19, 25, 15, 30];
let adults = ages1.filter(age => age > 18);
console.log(adults);

console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')
let prices = [10, 20, 30, 40];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')


console.log("%c____________________________________________", 'font-size:12px; color:red ;font:bold')