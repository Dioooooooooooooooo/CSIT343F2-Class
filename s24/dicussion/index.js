// [SECTION] Arrow Function
// Compact alternative syntax to traditional functions
// "DRY" (Don't Repeat Yourself) principle

const hello = () => {
  console.log("Hello world!");
};

// Function Expression

// What is the difference between a function declaration and a function expression in JavaScript?
// hoisting

// function declaration
// funcExpression();

let funcExpression = () => {
  console.log("Hello from the otherside.");
};

funcExpression();

// Arrow Functions With Template literals

let printFullName = (firstName, middleInitial, lastName) => {
  console.log(`${firstName} ${middleInitial}. ${lastName}`);
};

printFullName("John", "D", "Smith");

// Implicit Return Statement
// Arrow functions are able to return values without the use of "return" keyword.
// if arrow function return are only written in one line and does not have explicit code block with {};

// pre-arrow function without implicit return
let add = (x, y) => {
  return x + y;
};

let total = add(4, 5);
console.log(total);

// arrow function w/ implicit return
add = (num1, num2) => num1 + num2;

let sum = add(2, 2);
console.log(sum);

substract = (num1, num2) => num1 - num2;

let difference = substract(2, 1);
console.log(difference);

// Arrow Functions in Array Method
// shorten the way to write array methods that require anonymous functions.

let playlist1 = ["Signal", "What is love?", "Can't stop me", "Feel Special"];

playlist1.forEach((song) => {
  console.log(song);
});

let sales = [8900, 2000, 1000, 5000];

let isAllNumbers = sales.every((sale) => typeof sale === "number");
console.log(isAllNumbers);

// [SECTION] Class-Based Objects Blueprints
// Allows create/instantiate objects using classes as blueprints.
// creating a class blueprint

class Car {
  constructor(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year;
  }
}

// Instantiating an object

const myCar = new Car();

console.log(myCar);

myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

// Create a new object from car class with initialized values:
const myNewCar = new Car("Toyota", "Vios", 2021);

console.log(myNewCar);

/*
    Mini Activity (10 mins) until 1:58 pm

    1. Create a class named Product with the following:
        - A constructor that accepts name, price, and category.
        - A method getInfo() using an arrow function and implicit return, which returns:
            <name> belongs to the <category> with price of Php <price>
    2. A method applyDiscount() that:
        - Accepts a discount percentage.
        - Reduces the price based on the discount and returns the updated price.
    3. Log the following result in the console:
        - getInfo()
        - applyDiscount(10)
    4. Take a screenshot of the console and sent it in the chat

    Expected output:

    Gaming Laptop belongs to the Electronics category and costs Php 45000.
    Price after discount: Php 40500
*/

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getInfo = () =>
    `${this.name} belongs to the ${this.category} with price of Php ${this.price}`;

  applyDiscount = (discount) => {
    this.price -= this.price * (discount / 100);
    return `Price after discount: Php ${this.price}`;
  };
}

const laptop = new Product("Gaming Laptop", 45000, "Electronics");
console.log(laptop);
console.log(laptop.getInfo());
console.log(laptop.applyDiscount(10));
