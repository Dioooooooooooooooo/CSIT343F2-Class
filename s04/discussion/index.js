console.log("Hello, World!, It's me again");

// Best practices in naming variables

// 1. Descriptive
let movieTitle = "The Godfather"; // good variable name
//let x = aiah; // bad variable name

// 2. Start with a lowercase letter
let LastName = "Smith"; // bad variable name - PascalCase
// PascalCase is usually used for class names and/or constructor
// console.log(LastName);
let lastName = "Smith";

// 3. Do not add spaces to your variable names. Use specific naming conventions (camelCase, snake_case, or kebab-case)

// let first name = "Mike"
//camelCase
let firstName = "Mike";

console.log(firstName);

let email_address = "mikesmith@mail.com";

// 4. Avoid usinga variable with a reserved keyword.
// let new = "New Addition";
// console.log(new);

// Using the "=" or assignment operator, We can reassign a value to a variables created using let
let productName = "desktop computer";
productName = "Alienware Aurrora";
console.log(productName);

//This allow us to declare variables without initial value, then add a value later
let productPrice;
productPrice = 120000;
console.log(productPrice);

// const
//should not be changed

const interest = 3.539;
//interest = 4.5;
console.log(interest); // Assignment to constant variable error.

// Data types

// String used to create text
let myString = "";
let province = "Metro Manila";
let country = "Philippines";

console.log(province);
console.log(country);

// Numbers
// Integers/Whole Numbers
let myNumber = 0;
let headCount = 26;
console.log(headCount);

// Decimal Numbers/Fractions/Exponential
let grade = 98.7;
console.log(grade);

// Boolean
// True or False
let isMarried = false;
let isGoodConduct = true;

console.log(isMarried);
console.log(isGoodConduct);

// null
let spouse = null;
console.log(spouse);

// undefined
let fullName;
console.log(fullName);

// Arrays
// Special type of data
// store collection of values, and each value in array is associated with an index
// Array can store different data types but is normally used to store similar data types

// not recommended
// let person = ["Tolits", "18", true, "Quezon City"];
// console.log(person);

// to group similar data types

let grades = [90.1, 85.5, 88.9, 92.5];
console.log(grades);

// Objects
// this are special kind of data type that's used to mimic real world objects/items
//t to create complex data that contains pieces of information that are relevant to each other.
/*
    let/const = objectName = {
    propertyA: value,
    propertyB: value
    }
*/

let person = {
  fullName: "Juan Dela Cruz",
  age: 35,
  isMarried: false,
  contact: ["+639171234567", "81234567"],
  address: {
    houseNumber: "345",
    city: "Manila",
  },
};

console.log(person);

// useful for creatig abstract objects
let myGrades = {
  firstGrading: 91.5,
  secondGrading: 88.5,
  thirdGrading: 89.5,
  fourthGrading: 90.5,
};

console.log(myGrades);
