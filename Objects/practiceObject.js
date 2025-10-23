// Level 1: Object Basics
console.log('%c Level1:Object Basics','color:green ;font-size:27px');
// Q1. What is an object in JavaScript?

// Definition (in your own words):
// An object is a collection of related data or functions (called methods) stored as key–value pairs.

// Example:

let man = {
  name: "abdu",
  age: 20,
  country: "Rwanda"
};

// Q2. How do you create an object in JavaScript?

// 1️⃣ UsiBasic_Mathematical_Operations.js"ng object literal {}

let car = { brand: "Toyota", model: "Corolla" };


// 2️⃣ Using new Object()

let car2 = new Object();
car2.brand = "Honda";
car2.model = "Civic";
let school=new Object({
    name:'ECD school',
    classes:12,
    student_num :700 ,
    location:'mahama'
})

// Q3. What are object properties?

// Properties are key–value pairs that describe the object.

// Example:

let student = {
  name: "omer",
  age: 18,
  country: "Rwanda"
};

// Q4. How can you access object properties?

// Dot notation and Bracket notation

person= { name: "Ali", age: 35};

console.log(person.name);     
console.log(person["age"]);   

// Q5. How can you change or update a property value?
let user = { name: "Anil", age: 20 };
user.age = 21;  
console.log(user.age);

// Q6. How can you add a new property to an object?
user = { name: "Anil", age: 21 };
user.country = "Rwanda";  
console.log(user);

// Q7. How can you delete a property from an object?
let student1 = { name: "Anil", age: 21, country: "Rwanda" };
delete student1.age;
console.log(student1);

//  Level 2: Working with Object Methods
console.log('%c  Level 2: Working with Object Methods','color:green ;font-size:27px');
// Q8. What is a method in a JavaScript object?
// A method is a function inside an object.
 person = {
  name: "abduasalam",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); 

// Q9. How can you use this inside an object method?

// this refers Basic_Mathematical_Operations.js"to the current object.

let car1 = {
  brand: "Toyota",
  showBrand: function() {
    console.log("Brand is " + this.brand);
  }
};
car1.showBrand(); 

// Q10. How can you loop through all properties of an object?
 user = { name: "Anil", age: 20, country: "Rwanda" };

for (let key in user) {
  console.log(key + ": " + user[key]);
}

// Q11. How can you check if a property exists in an object?
user = { name: "Anil", age: 20 };

console.log("name" in user);           // true
console.log(user.hasOwnProperty("age")); // true

// Q12. How can you get all keys and values from an object?
user = { name: "Anil", age: 20 };

console.log(Object.keys(user));   // ['name', 'age']
console.log(Object.values(user)); // ['Anil', 20]

// Q13. How can you get both keys and values together from an object?
 user = { name: "Anil", age: 20 };

for (let [key, value] of Object.entries(user)) {
  console.log(key + ": " + value);
}

// Level 3: Object Operations and Manipulation
console.log('%c  Level 3: Object Operations and Manipulation','color:green ;font-size:27px');
// Q14. How can you copy an object without changing the original one?
 user = { name: "Anil", age: 20 };
user
let copy1 = Object.assign({}, user);
let copy2 = { ...user };

copy1.name = "John";
console.log(user.name); 

// Q15. How can you merge two or more objects together?
let obj1 = { name: "Anil" };
let obj2 = { age: 20 };
let merged = { ...obj1, ...obj2 };

console.log(merged); // { name: 'Anil', age: 20 }

// Q16. How can you freeze an object to prevent changes?
user = { name: "Anil" };
Object.freeze(user);

user.name = "John"; // No effect
console.log(user.name); // "Anil"

// Q17. How can you seal an object?
// Object.seal() allows changing existing values but prevents adding or deleting properties.

 user = { name: "Anil", age: 20 };
Object.seal(user);

user.age = 21;       
delete user.name;    

console.log(user);

// Q18. How can you find the number of properties in an object?
user = { name: "Anil", age: 20, country: "Rwanda" };
console.log(Object.keys(user).length); // 3

// Q19. How can you convert an object into an array?
 user = { name: "Anil", age: 20 };
let arr = Object.entries(user);
console.log(arr); // [['name', 'Anil'], ['age', 20]]

// Q20. How can you convert an array of pairs back into an object?
let arr1 = [['name', 'Anil'], ['age', 20]];
let obj = Object.fromEntries(arr);
console.log(obj); // { name: 'Anil', age: 20 }

