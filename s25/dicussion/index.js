console.log("Hello CIT!");

// JSON stands for JavaScript Object Notation
// JSON is also used in other programming languages hence the name JavaScript Object NOtation.

// JSON Objects
/*
		Syntax:
		{
			"propertyA":"valueA",
			"porpertyB" : "valueB", 

			...
		}

	*/

// Example of JSON Object:
// {
// 	"city" : "Quezon City",
// 	"province": "Metro Manila",
// 	"country": "Philippines"
// }

// Another example of JSON Object with embedded array as its value:
// {
// 	"cities" : [
// 		{"city" : "Quezon City", "province" : "Metro Manila", "country" : "Philippines"},
// 		{"city" : "Manila City", "province" : "Metro Manila", "country" : "Philippines"},
// 		{"city" : "Makati City", "province" : "Metro Manila", "country" : "Philippines"}
// 	]
// }

// JSON Methods
//Stringified method - it converts our JSON object into a stringified JSON
// Stringified JSON is a JavaScript Object converted into a string to be used in other functions of a JavaScript APplication.

// JSON.Stringify
let batchesArr = [{ batchName: "Batch X" }, { batchName: "Batch Y" }];
console.log(typeof batchesArr);

console.log("Result from stringify method:");
console.log(typeof JSON.stringify(batchesArr));
console.log(JSON.stringify(batchesArr));

// Stringified JSON object.
let data = JSON.stringify({
  name: "John",
  age: 31,
  address: {
    city: "Manila",
    country: "Philippines",
  },
});

console.log(data);

// JSON.parse

let parsedData = JSON.parse(data);

console.log("This is after the parse method:");
console.log(parsedData);

let stringifiedObject = `{
						 "name": "John",
						 "age" : "31"
						 
						 }`;
console.log(JSON.parse(stringifiedObject));
