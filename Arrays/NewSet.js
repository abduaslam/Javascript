const originalArray = [1, 2, 2, 3, 4, 4, 5];

// Create a Set from the array, which automatically removes duplicates
const uniqueSet = new Set(originalArray);

// Convert the Set back to an array using the spread syntax
const uniqueArray = [...uniqueSet];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]