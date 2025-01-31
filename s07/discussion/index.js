// console.log("Hello World");

// [SECTION] Functions

// lines/blocks of codes that tell our device/application to perform a certain task when called/invoked.
// complicated tasks to run several lines of codes in succession.
// to repeating lines/blocks  of codes that perform the same task.

// [SECTION] Function Declaration
/*
	Syntax:
		function functionName(){
			// code block (statements)
		}

*/

// Example:
function sayHello() {
  console.log("Hello World!");
}

// Display car information
function displayCarInfo() {
  console.log("Brand: Toyota");
  console.log("Type: Sedan");
  console.log("Price: 1,500,000");
}

// [SECTION] Function Invocation/Calling Function

sayHello();
displayCarInfo();

// declaredFunc(); - We cannot invoke a function we have yet to define.

// [SECTION] Function Naming Convention
// Js functions names are also case-sensitive.
// camelCase approach for declaring functions names.
// functions names should be definitive to the task it will perform.

// good practice
function displayCourses() {
  let courses = ["Science 101", "Math 101", "English 101"];
  console.log(courses);
}

displayCourses();

// Avoid generic names to avoid confusion with your code.
function get() {
  let name = "sampaguita";
  console.log(name);
}

get();

// Descriptive name - indicates the action to be executed.
function getFlowerName() {
  let name = "sampaguita";
  console.log(name);
}

getFlowerName();

// Avoid pointless and inaappropriate function names
// foo, bar - placeholder varible name /meta variable name
function foo() {
  console.log(25 % 5);
}

foo();

// Appropriate function name
function dispalyModulo() {
  console.log(50 % 5);
}

dispalyModulo();
