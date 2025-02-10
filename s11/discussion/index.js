// console.log("hello world!");

// [SECTION] if, else if and else Statements

let numG = -1;

// if statement
// Executes a statement if a specified condition is true
if (numG < 0) {
  console.log("hello");
}

numG = 0;

if (numG < 0) {
  console.log("hello");
}

// else if Clause
// Executes a statement if all other specified statements are false
let numH = 1;

if (numG < 0) {
  console.log("hello");
} else if (numH > 0) {
  console.log("world");
}

// Else Statement
// Executes the statement if all other statements are false
if (numH < 0) {
  console.log("hello");
} else if (numH == 0) {
  console.log("world");
} else {
  console.log("again");
}

function determineTyphoonIntensity(windSpeed) {
  if (windSpeed >= 118) {
    return "Typhoon detected.";
  } else if (windSpeed >= 89) {
    return "Severe tropical storm detected.";
  } else if (windSpeed >= 62) {
    return "Tropical storm detected.";
  } else if (windSpeed >= 30) {
    return "Tropical depression detected.";
  } else {
    return "Not a typhoon yet.";
  }
}

console.log(determineTyphoonIntensity(224));

// console.warn is a good way to print warning in our console that could help developers to act on a certain output of the code.
let message = determineTyphoonIntensity(90);

if (message == "Severe tropical storm detected.") {
  console.warn(message);
}

if ("false") {
  console.log(true);
} else {
  console.log(false);
}

// [SECTION] TRUTHY AND FALSY
/*
	- a value is considered as true when encountered in a boolean context.
	- values are considered true unless defined otherwise
	- Falsy values/exceptions for truthy:
		1. False
		2. 0
		3. -0
		4. ""
		5. null
		6. undefined
		7. NaN
*/

// Truthy
if (true) {
  console.log("truthy");
}

if (1) {
  console.log("truthy");
}

if ({}) {
  console.log("truthy");
}

// Falsy

if (false) {
  console.log("falsy");
}

if (0) {
  console.log("falsy");
}

if (undefined) {
  console.log("falsy");
}

if (null) {
  console.log("falsy");
}

if ("") {
  console.log("falsy");
}

if (NaN) {
  console.log("falsy");
}

// [SECTION] Ternary Operator
/*
	- can be used as an alternative to an if-else statement
	- single statement execution, wherein the result is consist of only one line of code.
	- have an implicit return statement, without the "return" keyword
	- Syntax: (expression) ? ifTrue : ifFalse
*/

// Single statement execution
let ternaryResult = 1 < 18 ? true : false;
console.log("Result of ternary operator: " + ternaryResult);

// Multiple statement execution
let name;
let age = 19;

function isOfLegalAge() {
  name = "John";
  return "you are of the legal age limit";
}

function isUnderAge() {
  name = "Jane";
  return "you are under the age limit";
}

let legalAge = age > 18 ? isOfLegalAge() : isUnderAge();
console.log(
  "Result of ternary operator in functions: " + legalAge + ", " + name
);
