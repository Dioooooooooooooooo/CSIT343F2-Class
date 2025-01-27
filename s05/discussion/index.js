// [SECTION] Arithmetic Operators

let x = 1397;
let y = 7831;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log("Result of addition operator: " + sum);
console.log("Result of subtraction operator: " + difference);
console.log("Result of mutiplication operator: " + product);
console.log("Result of division operator: " + quotient);

// [SECTION] Assignment Operator 😊)

let assignmentNumber = 8;

// Addition Assignment Operator
// adds the value of right operant to a variable and assigns the result to the variable.
assignmentNumber = assignmentNumber + 2;
console.log("Result of addition assignment operator : " + assignmentNumber);

// Shorthand for assignmentNumber
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// -=, *=, /=
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: " + assignmentNumber);

// [SECTION] Increment and Decrement(++/--)
// Operators that add or subtract values by 1 and reassigns the value of the variable where the increment/decrement was applied.
let z = 1;

// Pre-increment(++z): Increments first, then return the new value.
let increment = ++z;

console.log("Result of pre-increment: " + increment);
console.log(z);

// Post-increment(z++): Returns the original value, then increments.
increment = z++;

console.log("Result of post-increment: " + increment);
console.log(z);

let decrement = --z;
console.log("Result of pre-decrement: " + decrement);
console.log("Result of pre-decrement: " + z);

decrement = z--;
console.log("Result of post-decrement: " + decrement);
console.log("Result of post-decrement: " + z);
