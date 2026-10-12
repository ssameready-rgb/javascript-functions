// Start coding here
let calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

let addResult = calculator.add(10, 20);
let divideResult = calculator.divide(3000, 10);
let findMinNumber(a,b){
    return Math.min(a,b);
}

console.log(addResult); // Output: 30
console.log(divideResult); // Output: 300
console.log(findMinNumber(5, 10)); // Output: 5



