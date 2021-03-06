const number = document.querySelectorAll(".number")
number.forEach((number)=>{
    number.addEventListener("click",()=>{
        console.log(event.target.value)

    })
})

const calculatorScreen= document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        // updateScreen(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    // currentNumber += number
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    // prevNumber = currentNumber
    // calculationOperator = operator
    // currentNumber = ''
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',()=> {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

const calculate= () => {
    let result = ''
    if (calculationOperator === "+") {
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
    } else  if (calculationOperator === "-"){
        result = parseFloat(prevNumber) - parseFloat(currentNumber)
    } else  if (calculationOperator === "*"){
        result = parseFloat(prevNumber) * parseFloat(currentNumber)
    } else if (calculationOperator === "/"){
        result = parseFloat(prevNumber) / parseFloat(currentNumber)
    } else if (calculationOperator === "%"){
        result = parseFloat(prevNumber) % parseFloat(currentNumber)
    } else if (calculationOperator === "x??"){
        result = parseFloat(prevNumber) * parseFloat(prevNumber)
    } else if (calculationOperator === "???"){
        result = Math.sqrt(parseFloat(prevNumber))
    } else {
        result = alert('anda menekan operator yang salah!')
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    // console.log('ac button is pressed')
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    // currentNumber += dot
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
