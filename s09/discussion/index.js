console.log("S09 Discussion");

// Function and Parenmeters
/*
    Syntax:
    function functionName(parameter) {
        // code to be executed
    }

    functionName(parameter);
*/

function printName(name) {
  console.log("My name is " + name);
}

printName("Juana");
printName("John");

// Variables as Arguments

let sampleVariable = "Jane";
printName(sampleVariable);

function checkDivisibilityBy8(num) {
  let remainder = num % 8;
  console.log("The remainder of " + num + " divided by 8 is " + remainder);
  let isDivisibleBy8 = remainder === 0;
  console.log("Is " + num + " divisible by 8? " + isDivisibleBy8);
  console.log(isDivisibleBy8);
}

checkDivisibilityBy8(64);
