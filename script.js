// class section
class Calculator {
  constructor() {
    this.clear();
  }

  clear() {
    this.current = '';
    this.result = 0;
  }

  delete() {
    this.current = this.current.toString().slice(0, -1);
  }

  appendNumber(number) {
    this.current += number;
  }

  chooseOperation(operation) {
    // if (this.appendNumber(number) === '') return;
    this.current += operation;
  }
  compute() {
    try {
      this.result = eval(this.current);
    } catch (error) {
      this.result = 'Error';
    }
    this.current = this.result.toString();
  }

  getDisplay() {
    return this.current;
  }
}

const currentNumber = document.querySelector('[data-current-number]');

const calculator = new Calculator();

// function section

function appendNumber(number) {
  calculator.appendNumber(number);
  updateDisplay();
}

function chooseOperation(operation) {
  calculator.chooseOperation(operation);
  updateDisplay();
}

function Delete() {
  calculator.delete();
  updateDisplay();
}

function allClear() {
  calculator.clear();
  updateDisplay();
}

function compute() {
  calculator.compute();
  updateDisplay();
}
function updateDisplay() {
  currentNumber.value = calculator.getDisplay();
}
