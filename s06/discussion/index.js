console.log("Hello World");

// [SECTION] JS Type Coercion
// automatically changes one value type to another

let numA = "10";
let numB = 12;

/*
 - Add/concatenate a string and a number it will result as a string
 */

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

coercion = numA * numB;
console.log(coercion);
console.log(typeof coercion);

/*
  - Adding a boolean to a number, will result to a number.
  - true is change to a value of 1
*/

let coercionTrue = true + 1;
console.log(coercionTrue);
console.log(typeof coercionTrue);

/*
  - Adding a boolean to a number, will result to a number.
  - false is change to a value of 0
*/

let coercionFalse = false + 1;
console.log(coercionFalse);
console.log(typeof coercionFalse);

// Arrays (and objects) are compared by reference (memory address), not by value
let coercionObject = [] == [];
console.log("coercionObject: " + coercionObject);

// [SECTION] Comparison Operators

// Strict Equality(===)

/*
    - Checkes whether the operands are equal and have the same value.
    - Also compares their data types.
*/

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === "1");
console.log(0 === false);

// Strict Equality(!==)

console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== "1");
console.log(0 !== false);

// [SECTION] Comparison Operator
// Checks one value if greater of less than to the other values

let a = 50;
let b = 65;

// Greater than operator
let isGreatherThan = a > b;
// Less than or operator
let isLessThan = a < b;
// Greater than or equal operator
let isGTorEqual = a >= b;
// Less than or equal operator
let isLTorEqual = a <= b;

console.log(isGreatherThan);
console.log(isLessThan);
console.log(isGTorEqual);
console.log(isLTorEqual);

let numStr = "50";
console.log(a >= numStr); //true - forced coercion to change string to a number

console.log(b <= numStr); // false - 65 is not less than or equal to 50

let string = "twenty";
console.log(b >= string);
// Since the string is not numeric, it will be converted to a number and it will result to NaN (Not a Number)

// NaN - result of unsuccessful conversion from String to Number of alphanumeric string
console.log(b * string);

// [SECTION]  Logical Operators
let isLegalAge = true;
let isRegistered = false;

// Logical AND opeator  (&&)
// returns true if all operands  are true
let allRequirements = isLegalAge && isRegistered;
console.log("Result of logical AND operator: " + allRequirements);

// Logical OR operator (||)
// returns true if one of the operands is true
let someRequirements = isLegalAge || isRegistered;
console.log("Result of logical OR operator: " + someRequirements);

// Logical Not Operator (!)
let someRequirementsNotMet = !isRegistered;
console.log("Result of logical NOT operator: " + someRequirementsNotMet);
