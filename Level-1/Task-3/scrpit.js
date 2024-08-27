let display = document.getElementById('display');
let currentInput = '0';

function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    updateDisplay('Error');
  }
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    currentInput = '0';
  }
  updateDisplay();
}

function updateDisplay(value = currentInput) {
  display.textContent = value;
}