// Multiple Parameters
/*
 - In JS, providing more/less parameters than the function definition is not an error.
 - Providing less arguments than the expected parameters will automatically assign the missing parameters as undefined.
*/

function createFullName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

// Using variables as arguments
createFullName("Juan", "Dela", "Cruz");
createFullName("Juan", "Dela");
createFullName("Juan", "Dela", "Cruz", "Hello");

let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";

createFullName(firstName, middleName, lastName);

function printFullName(middleName, firstName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}

printFullName("Juan", "Dela", "Cruz");
