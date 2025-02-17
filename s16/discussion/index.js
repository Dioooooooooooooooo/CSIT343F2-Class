console.log("hello world");

let allStars2025 = ["Curry", "Irving", "Harden", "Jokic", "Wembanya", "James"];

console.log(allStars2025);

/* [SECTION] Modifying Array Length
	 -
*/

console.log("length of All-Stars 2025 array: ");
console.log(allStars2025.length);

// delete last item of the array
allStars2025 = allStars2025.length - 1;

console.log("Updates length of All-Stars 2025 array: ");
console.log(allStars2025.length);

allStars2025.length = 0;

console.log("Updated length of All-Stars 2025 array: ");
console.log(allStars2025.length);

console.log("Updated allstars2025 array: " + allStars2025);

/* [SECTION] Accessing arrays
	- Elements can be accessed through index/number
	- arrays starts at 0, to get last index of an array it will be arr.length -1
*/

console.log("First element of All-Stars 2025 array: " + allStars2025[0]);
console.log("Second element of All-Stars 2025 array: " + allStars2025[1]);
console.log(
  "Last element of All-Stars 2025 array: " +
    allStars2025[allStars2025.length - 1]
);

/* [SECTION] reassigning array */
let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Kareem"];
console.log(lakersLegends[3]);

let currentLaker = lakersLegends[2];
console.log(currentLaker);

console.log("Array before reassignments: " + lakersLegends);

lakersLegends[2] = "Gasol";
console.log("Array after reassignments: " + lakersLegends);

const bullsLegends = [];

bullsLegends[0] = "Jordan";
bullsLegends[1] = "Pippen";

// bullsLegends = "Rodman";

console.log("Bulls legends: " + bullsLegends);

// Looping over an array
for (let i = 0; i < lakersLegends.length; i++) {
  console.log(lakersLegends[i]);
}

/*

		Mini Activity: (5 mins)

		1. Create an array named numArr with the values [5, 12, 30, 46, 40].

		2. Implement a function isAllDivisibleBy5(array) that checks if all elements in the array are divisible by 5.

		3. If an element is not divisible by 5, print its index immediately.

		4. If all numbers are divisible by 5, return true; otherwise, return false.

		5. Print the result by calling isAllDivisibleBy5(numArr).

		6. Take a screenshot of the browser console and send it in the chat.
 
		Expected output:

		Not divisible by 5 at index: 1  

		Not divisible by 5 at index: 3  

		false

*/

let numArr = [5, 12, 30, 46, 40];

function isAllDivisibleBy5(array) {
  let isDivisibleBy5 = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 5 !== 0) {
      console.log("Not divisible by 5 at index: " + i);
      isDivisibleBy5 = false;
    }
  }

  return isDivisibleBy5;
}

console.log(isAllDivisibleBy5(numArr));
