class Calculator {
  constructor(prevNumber, currentNumber) {
    this.prevNumber = prevNumber;
    this.currentNumber = currentNumber;
    this.clear();
  }

  clear() {
    this.current = '';
    this.prev = '';
    this.operation = '';
  }

  delete() {
    this.current = this.current.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.current.includes('.')) return;
    this.current = this.current + number;
  }

  chooseOperation(operation) {
    if (this.current === '') return;
    this.operation = operation;
  }
  compute() {
    let computation;
    const p = parseFloat(this.current);
    const c = parseFloat(this.current);
    if (isNaN(p) || isNaN(c)) return;
    switch (this.operation) {
      case '+':
        computation = p + c;
        break;
      case '-':
        computation = p - c;
        break;
      case '/':
        computation = p / c;
        break;
      case '*':
        computation = p * c;
        break;
      default:
        return;
    }
    this.prev = computation;
    this.operation = '';
    this.current = '';
  }

  updateDisplay() {
    this.currentNumber.innerText = `${this.current} ${this.operation}`;
    this.prevNumber.innerText = `${this.prev}`;
  }
}

const numbersButton = document.querySelectorAll('[data-number]');
const operationsButton = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButtton = document.querySelector('[data-all-clear]');
const prevNumber = document.querySelector('[data-prev-number]');
const currentNumber = document.querySelector('[data-current-number]');
const equalsButton = document.querySelector('[data-equals]');

const calculator = new Calculator(prevNumber, currentNumber);

numbersButton.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
});

operationsButton.forEach((operationButton) => {
  operationButton.addEventListener('click', () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButtton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
