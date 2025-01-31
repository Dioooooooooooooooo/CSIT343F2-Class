// console.log("This is s08");

// [SECTION] Understanding Scope in JavaScript
// Scope determines the accessibility and visibility of variables in JavaScript.

// Types of scope in JavaScript

// Global Scope
// accessible form anywhere in your code.

const globalVariable = "I'm a global variable";

function displayGlobal() {
  console.log(globalVariable);
}

displayGlobal();
console.log(globalVariable);

// Local scope

// Function Scope
// Variables declared inside a function using var, let, or const are scoped to that function.
function localFunction() {
  let localVariable = "I'm a local variable.";
  console.log(localVariable);
}

localFunction();
// console.log(localVariable);

// Block Scope ({} - if, for, while)
// Variables declared with let or const inside these blocks are scoped to that specific block.
{
  var blockVariable = "I'm a block-scoped variable";
  console.log(blockVariable);
}

// console.log(blockVariable);

// [SECTION] Return Statement

// allow us to output a value from a function to be passed to the line/block of code that invoked/called in the function.

// Return Statement
function returnFullName() {
  let fullName = "Jeffrey" + " " + "Smith" + " " + "Bezos";
  return fullName;
  console.log("This message will not be printed.");
}

let fullName = returnFullName();
console.log(fullName);

console.log(returnFullName());

//[SECTION] console.log vs return statements

function returnFullAddress() {
  let fullAddress = {
    street: "#44 Maharlika St.",
    city: "Tarlac City",
    province: "Tarlac",
  };

  return fullAddress;
}

let myAddress = returnFullAddress();
console.log(myAddress);

function printPlayerInfo() {
  console.log("UserName: " + "White_knight");
  console.log("Level: " + 95);
  console.log("Job: " + "Paladin");
}

// returns undefined because printPlayerInfo does not return any data.
// It  only display the details in the console.
let user1 = printPlayerInfo();
console.log(user1);

// You can return almost any data types from a function.

function returnSumOfNumbers() {
  return 5 + 10;
}

let sumOf5And10 = returnSumOfNumbers();
console.log(sumOf5And10);

let total = 100 + returnSumOfNumbers();
console.log(total);

// Simulates getting an array of user names form database
function getGuildMembers() {
  return ["White_knight", "healer2000", "andrewthehero"];
}

console.log(getGuildMembers());
