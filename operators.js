/*
Task 1: Declare variables to store two numeric values for performing arithmetic operations.

Task 2: Assign sample numeric values to the variables declared in Task 1.

Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

// Task 3: Perform arithmetic operations
console.log("Sum:", ....);
console.log("Difference:", ...);
console.log("Product:", ...);
console.log("Quotient:", ...);
Task 4: Explore assignment operators and update the values of variables.

// Task 4: Explore assignment operators
console.log("Updated num1:", ...);
console.log("Updated num2:", ...);
Task 5: Use comparison operators to compare the values of variables.

// Task 5: Use comparison operators
console.log("Is num1 equal to num2?", ...);
console.log("Is num1 greater than num2?", ...);
console.log("Is num1 not equal to num2?", ...);
Task 6: Apply logical operators to combine conditions and display the results.

// Task 6: Apply logical operators
let isPositive = ...;
let isEven = ...;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
*/

let x = 4
let y = 5

console.log("Sum", x + y);
console.log("Difference", y - x);
console.log("Product", x*y);
console.log("Quotient", y / x)


x = 10
y = 20 

console.log("Updated x:", x);
console.log("Updated y:", y);

console.log("Is x equal to y?", x === y)
console.log("Is x greater than y?", x > y)
console.log("Is x not equal to y?", x !== y)

let isPositive = x > 0 && y > 0;
let isEven = x % 2 === 0 || y % 2 === 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
