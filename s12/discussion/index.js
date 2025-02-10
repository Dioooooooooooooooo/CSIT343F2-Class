// console.log("hello world!");

/*
	[SECTION] Switch Statement
	- used to perform different action based on different conditions.
	- alternative to using multiple if-else statement

	Syntax:
		switch(expression){
			case value1:
				// code block
				break;
			case value2:
				// code block
				break;
			default:
				// code block (optional)
				break;
		}
*/

// Switch Case to handle different days of the week
let day = "Monday";
day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break; // terminates a case
  case "Friday":
    console.log("End of the work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend time");
    break;
  default:
    console.log("It's just another day.");
}

// Mini Activity (3 mins)
// Create a switch statement that evaluates a student's grade (A, B, C, D, or others).
// "A": "Excellent work!"
// "B": "Good job!"
// "C": "You can do better."
// "D": "Try harder next time."
// Any other grade: "Invalid grade."
// Run the code in your browser console.
// Take a screenshot of the output and send it in the chat.

let grade = "A";

function evaluateGrade(grade) {
  let message;
  switch (grade) {
    case "A":
      message = "Excellent work!";
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "You can do better.";
      break;
    case "D":
      message = "Try harder next time.";
      break;
    default:
      message = "Invalid grade.";
  }

  return message;
}

/*
	When to use switch over if statement
	- switch when checking specific, fixed values (better readability)
	- if-else for complex conditions or comparison (more flexibility)
*/

/*
	[SECTION] try-catch-finally statement
	- "try-catch" used for error handling
	- "finally" is used to specify a response that is used to handle/resolved errors
*/

function showIntensityAlert(windSpeed) {
  try {
    // line of code w/ error
    alerat(determineTyphoonIntensity(windSpeed));
  } catch (error) {
    console.log(typeof error);
    console.warn(error.message);
  } finally {
    alert("Intensity update will show new alert");
  }
}

showIntensityAlert();
console.log("hello world");
