let currentInput = '';
let operator = '';
let firstValue = '';
let operatorPressed = false;

function appendNumber(number) {
  if (operatorPressed) {
    currentInput = ''; // Clear input when operator is pressed before a number.
    operatorPressed = false;
  }
  currentInput += number;
  document.getElementById('result').value = firstValue + operator + currentInput;
}

function appendOperator(op) {
  if (firstValue === '') {
    firstValue = currentInput;
    currentInput = '';
  } else if (currentInput !== '') {
    calculateResult();  // Calculate if we already have a number and operator.
    firstValue = document.getElementById('result').value;  // Update firstValue with the current result
    currentInput = ''; // Clear currentInput after calculation
  }
  operator = op;
  operatorPressed = true;
  document.getElementById('result').value = firstValue + operator;  // Show operator on the screen
}

function calculateResult() {
  if (firstValue !== '' && currentInput !== '') {
    let result;
    const first = parseFloat(firstValue);
    const second = parseFloat(currentInput);
    
    switch (operator) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        return;
    }
    
    document.getElementById('result').value = result;
    currentInput = result.toString();
    firstValue = '';
    operator = '';
    operatorPressed = false;
  }
}

function clearResult() {
  currentInput = '';
  firstValue = '';
  operator = '';
  operatorPressed = false;
  document.getElementById('result').value = '';
}
