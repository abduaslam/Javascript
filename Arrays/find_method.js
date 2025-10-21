let numbers=[1,3,4,5,7,8,9,90,10];
const found=numbers.find(num=>num>5);
console.log(found)

let filterNumbers=numbers.filter(x=> x>7);
console.log(filterNumbers);

let price=[20,40,60,80];
let total = price.reduce(function(sum,price){
    return sum+price ;

},0)
console.log(total);