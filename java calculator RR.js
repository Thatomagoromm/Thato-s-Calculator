let currentInput = '0';
let operator = '';
let previousInput = '0';

function clearScreen() {
  currentInput = '0';
  operator = '';
  previousInput = '0';
  updateScreen();
}

function updateScreen() {
  document.getElementById('screen').textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  updateScreen();
}

function appendOperator(op) {
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
  updateScreen();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateScreen();
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = '';
  previousInput = '0';
  updateScreen();
}
