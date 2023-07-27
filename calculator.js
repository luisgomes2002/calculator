//num functions
const buttonsNum = document.querySelectorAll('.num')

buttonsNum.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
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

