function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
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
        if (receivedOperatorString == false) {
            firstNumber = number.textContent;
            display.textContent = number.textContent;
            receivedFirstNumber = true;
        } else {
            secondNumber = number.textContent;
            display.textContent = number.textContent;
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
    display.textContent = operate(firstNumber, operatorString, secondNumber);
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