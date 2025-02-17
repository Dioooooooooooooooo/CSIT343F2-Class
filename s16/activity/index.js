/* 
1. In the s16 folder, create an activity folder, an index.html file inside of it and link the index.js file.
2. Create an index.js file and console log the message Hello World to ensure that the script file is properly associated with the html file.
3. Copy the activity code and instructions from your Boodle Notes into your index.js.
*/

//Given array can be used for testing.
let groceryList = [
  "Tomato Sauce",
  "Spgahetti Noodles",
  "Onion",
  "Cheese",
  "Hotdog",
  "Fruit Cocktail",
  "All Purpose Cream",
];

/*
    4. Create function which is able to receive an array and the index number of the item to be found, then return the found item.
        - function should be able to receive an array and the index of the item to be found.
        - return the item accessed by the index.
        - if the item cannot be found, return undefined.
*/

function getItemByIndex(array, index) {
  if (!array[index]) {
    return undefined;
  }
  return array[index];
}

/*

    6. Create a function able to verify if all elements in an array are even numbers.
        - The function should take an array as its input.
        - Inside the function, set up a loop to go through each element in the array.
        - within the loop add an if statement to check if the current item being looped is an even number.
            - If the current item looped is NOT an even number, return false
        - After the loop (outside of it), return true, indicating that all elements in the array are even numbers.
*/

function updateItemByIndex(array, value, index) {
  if (index >= 0 && index < array.length) {
    array[index] = value;
  }
  return array;
}

/* 

    7. Debug the given code to allow the functions to properly receive and return the correct values and mimic the output.
        - Check the syntax of the given code.
        - Check if proper value is returned or displayed.
        - Check the parameters and arguments.
        - Check the if else statements
        - Check the if conditions
        - Check the loop statements
        - Check the loop conditions
        - Check the array access
    - Use the browser console to test your functions.
*/

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function calculateAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}
