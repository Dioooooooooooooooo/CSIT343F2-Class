console.log("hello world");

/* [SECTION] While loop

		- A while loop takes an expression/condition.
		- "Iteration" the term given to the repetition of statements.
		- Syntax:
				while (condition) {
					// code block;
				};
*/

let count = 5;

// while value of count is not equal to 0
while (count !== 0) {
  console.log("While: " + count);
  count--;
}

/* [SECTION] Do-While Loop
	- do while 
	- similar to while loop but ensures that it will execute the code at least once
	- Syntax:
		do {
			// statement
		} while (expression/condition); 
*/

function demoDoWhile(number) {
  do {
    console.log("Do While: " + number);
    number++;
  } while (number < 10);
}

// demoDoWhile(1);
demoDoWhile(10);

/*
		Mini Activity (5 mins)
		1. Create a countdown that starts at 10 and prints only odd numbers afterward.
		2. Store the number 10 in a variable named "num".
		3. When the countdown reaches 1, print "Done!".
		4. Take a screenshot of the output in the browser console and send it in the chat.
		Expected output:
		10  
		9  
		7  
		5  
		3  
		1  
		Done!
*/

let num = 10;

do {
  console.log(num);
  num -= num === 10 ? 1 : 2;
} while (num > 0);

console.log("Done!");
