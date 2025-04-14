let historyArray = [];
let memory = null;

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const resultDisplay = document.getElementById("result");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const memoryAddBtn = document.getElementById("memoryAddBtn");
const memoryRecallBtn = document.getElementById("memoryRecallBtn");
const memoryClearBtn = document.getElementById("memoryClearBtn");

firstNumberInput.addEventListener("input", validateInputs);
secondNumberInput.addEventListener("input", validateInputs);

addBtn.addEventListener("click", () => performOperation("+"));
subtractBtn.addEventListener("click", () => performOperation("-"));
multiplyBtn.addEventListener("click", () => performOperation("*"));
divideBtn.addEventListener("click", () => performOperation("/"));

memoryAddBtn.addEventListener("click", addToMemory);
memoryRecallBtn.addEventListener("click", recallMemory);
memoryClearBtn.addEventListener("click", clearMemory);

clearHistoryBtn.addEventListener("click", clearHistory);

document.addEventListener("keydown", handleKeyPress);

window.addEventListener("DOMContentLoaded", validateInputs);

function validateInputs() {
  const firstValue = firstNumberInput.value.trim();
  const secondValue = secondNumberInput.value.trim();

  const isValid = firstValue !== "" && secondValue !== "";

  addBtn.disabled = !isValid;
  subtractBtn.disabled = !isValid;
  multiplyBtn.disabled = !isValid;
  divideBtn.disabled = !isValid;

  console.log("Input validation:", {
    firstValue,
    secondValue,
    isValid,
    addBtnDisabled: addBtn.disabled,
  });
}

function performOperation(operator) {
  const firstNum = parseFloat(firstNumberInput.value);
  const secondNum = parseFloat(secondNumberInput.value);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Please enter valid numbers");
    return;
  }

  let result;
  let operationSymbol;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      operationSymbol = "+";
      break;
    case "-":
      result = firstNum - secondNum;
      operationSymbol = "−";
      break;
    case "*":
      result = firstNum * secondNum;
      operationSymbol = "×";
      break;
    case "/":
      if (secondNum === 0) {
        alert("Division by zero is not allowed");
        return;
      }
      result = firstNum / secondNum;
      operationSymbol = "÷";
      break;
  }

  result = Math.round(result * 1000000) / 1000000;

  resultDisplay.textContent = result;

  const historyItem = `${firstNum} ${operationSymbol} ${secondNum} = ${result}`;
  historyArray.push(historyItem);
  updateHistoryDisplay();

  clearHistoryBtn.disabled = false;
}

function updateHistoryDisplay() {
  historyList.innerHTML = "";

  historyArray.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  historyArray = [];
  updateHistoryDisplay();
  clearHistoryBtn.disabled = true;
}

function addToMemory() {
  const resultText = resultDisplay.textContent;
  if (resultText) {
    memory = parseFloat(resultText);
    alert("Result stored in memory");
  } else {
    alert("No result to store in memory");
  }
}

function recallMemory() {
  if (memory !== null) {
    firstNumberInput.value = memory;
    validateInputs();
  } else {
    alert("Memory is empty");
  }
}

function clearMemory() {
  if (memory !== null) {
    memory = null;
    alert("Memory cleared");
  } else {
    alert("Memory is already empty");
  }
}

function handleKeyPress(event) {
  if (
    document.activeElement === firstNumberInput ||
    document.activeElement === secondNumberInput
  ) {
    return;
  }

  switch (event.key) {
    case "Enter":
      if (!addBtn.disabled) {
        performOperation("+");
      }
      break;
    case "+":
      if (!addBtn.disabled) {
        performOperation("+");
      }
      break;
    case "-":
      if (!subtractBtn.disabled) {
        performOperation("-");
      }
      break;
    case "*":
      if (!multiplyBtn.disabled) {
        performOperation("*");
      }
      break;
    case "/":
      if (!divideBtn.disabled) {
        performOperation("/");
      }
      break;
  }
}
