// console.log("S22 discussion");

/*
	Objects Recall:

	1. Creating objects using objects literal:
		Syntax:
			let objectA = {
				keyA: valueA,
				keyB: valueB
			}
	
	2. Creating objects using a constructor function
		- Useful when we need to create several objects with different values but same properties
		
		Syntax:
			function ObjectName(keyA, keyB) {
				this.keyA = keyA;
				this.keyB = keyB;
			}
*/

function Laptop(name, manufactureDate) {
  this.name = name;
  this.manufactureDate = manufactureDate;
}

let laptop = new Laptop("Lenovo", 2008);
console.log(laptop);

/*
	Mini-Activity:  1:33PM.
		Create another instance of the Laptop Object.
		Use myLaptop as the object name. name = MacBook Air, manufactureDate = 2020;

*/

let myLaptop = new Laptop("MacBook Air", 2020);
console.log(myLaptop);

// no new keyword
// Returns "undefined" without the "new" operator because the "Laptop" function does not have a return statement
let oldLaptop = Laptop("Portal R2E CCMC", 1980);
console.log(oldLaptop);

/*
	Object Methods:
		- Methods are functions within an object. They can be accessed and invoked from an object

*/

let person = {
  // property/key
  name: "John",
  // method
  talk: function () {
    console.log("Hello! My name is " + this.name);
  },
};

person.talk();

console.log(person);

//Adding methods to objects
person.walk = function () {
  console.log(this.name + " walked 25 steps forward.");
};

console.log(person);
person.walk();

/*
	Mini-Activity: 1:54PM
		Create a friend object with the ff properties and method:

		properties:
			firstName
			lastName
			address
		method:
			introduce: "Hello my name is <firstname> <lastname>"

		Invoke introduce method.
*/

let friend = {
  firstName: "Joe",
  lastName: "Smith",
  address: {
    city: "Austin",
    state: "Texas",
  },
  introduce: function () {
    console.log(
      "Hello! My name is " + this.firstName + " " + this.lastName + "."
    );
  },
};

console.log(friend);
friend.introduce();

//Object methods can also receive arguments much like regular functions

friend.greet = function (object) {
  console.log("Hi " + object.name + "!");
};

friend.greet(person);

// Real World Application of Objects - Constructor with Methods

function Student(fullName, email, age) {
  // properties of our object
  this.fullName = fullName;
  this.email = email;
  this.age = age;
  this.subjects = [];
  // methods
  this.enroll = function (subjectName) {
    this.subjects.push(subjectName);
    return "Enrolled in " + subjectName;
  };

  this.introduction = function () {
    return "Hello! I'm " + fullName;
  };
}

let student1 = new Student("Jeffrey Doe", "jeffdoe@mail.com", 20);
let student2 = new Student("John Smith", "johnsmith@mail.com", 18);

console.log(student1);
console.log(student2);
