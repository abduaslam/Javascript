const originalArray = [1, 2, 2, 3, 4, 4, 5];

// Filter the array, keeping only elements where the first index of the value
// matches the current index, effectively removing duplicates.
const uniqueArray = originalArray.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]



//antother examples

let numbers = [1, 2, 2, 3, 4, 4, 5];

let uniqueNumbers = numbers.filter((value, index, arr) => {
  // Check if this is the first time this value appears
  return arr.indexOf(value) === index;
});

console.log(uniqueNumbers);
