function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function operate(a, operator, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);  
    }
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');

let firstNumber = 0,
    receivedFirstNumber = false,
    secondNumber = 0,
    receivedSecondNumber = false,
    operatorString = '',
    receivedOperatorString = false,
    calculationComplete = false;

numbers.forEach(number => number.addEventListener("click", () => {
        if (receivedOperatorString == false && calculationComplete == false) {
            firstNumber *= 10;
            firstNumber += parseInt(number.textContent);
            display.textContent = firstNumber;
            receivedFirstNumber = true;
        } else if (receivedOperatorString == false && calculationComplete == true) {
            firstNumber = parseInt(number.textContent);
            display.textContent = firstNumber;
            receivedFirstNumber = true;
            calculationComplete = false;
        } else {
            secondNumber *= 10;
            secondNumber += parseInt(number.textContent);
            display.textContent = secondNumber;
            receivedSecondNumber = true;
        }
    })
);

operators.forEach(operator => operator.addEventListener("click", () => {
        if (receivedFirstNumber == true) {
            operatorString = operator.textContent;
            display.textContent = operator.textContent;
            receivedOperatorString = true;
        }
    })
);

equal.addEventListener("click", () => {
    if (receivedSecondNumber == true) {
        firstNumber = operate(firstNumber, operatorString, secondNumber);
        display.textContent = firstNumber;
        secondNumber = 0,
        receivedSecondNumber = false,
        operatorString = '',
        receivedOperatorString = false,
        calculationComplete = true;
    }
});

clear.addEventListener("click", () => {
    firstNumber = 0,
    receivedFirstNumber = false,
    secondNumber = 0,
    receivedSecondNumber = false,
    operatorString = '',
    receivedOperatorString = false,
    calculationComplete = false;

    display.textContent = 0;
});