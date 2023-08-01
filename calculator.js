//display
const display = document.querySelector('.screen')

class Calculator {
  constructor(display) {
    this.display = display
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.operation = undefined
  }

  delete() {

  }

  appendNumber(number) {
    if (number === ',' && this.currentOperand.includes(',')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chasseOperation(operation) {

  }

  computer() {

  }

  getDisplayNumber() {

  }

  updateDisplay() {
    this.display.innerText = this.currentOperand
  }
}

const calculator = new Calculator(display)

//num functions
const buttonsNum = document.querySelectorAll('.num')

buttonsNum.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 300)
  })
})

//zero functions
const buttonZero = document.querySelectorAll('.btn-zero')

buttonZero.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 300)
  })
})

//ac functions
const buttonAc = document.querySelectorAll('.ac')

buttonAc.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    calculator.clear()
    calculator.updateDisplay()
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 300)
  })
})

//op functions
const buttonOp = document.querySelectorAll('.op')

buttonOp.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 300)
  })
})

