
let var1 = '';
let var2 = '';
let operating = '';
let refresh = false;

const numButtons = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]')
const display = document.querySelector('.digits');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');

clear.onclick= () => calcWipe();

equals.onclick = () => finalement();


numButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((operator) =>
    operator.addEventListener('click', () => calculate(operator.textContent))
)

function calcWipe() {
    display.textContent = '';
    var1 = '';
    var2 = '';
    operating = '';
    refresh = false;
}

function appendNumber (number) {
    if (refresh) {
        display.textContent = '';
        display.textContent += number;
        refresh = false;
    } else {
        display.textContent += number;
    }
}

function calculate (sign) {
    if (operating == '') {
        var1 = display.textContent;
        console.log(display);
        display.textContent = '';
        operating = sign;
    } else {
        var2 = display.textContent;
        display.textContent = roundResult(evaluate(operating, var1, var2));
        operating = sign;
        var1 = display.textContent;
        refresh = true;
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function evaluate(sign, a, b) {
    a = Number(a)
    b = Number(b)
    switch(sign) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'X':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function finalement() {
    if (var1 != '') {
        var2 = display.textContent;
        console.log(var1, var2);
        display.textContent = roundResult(evaluate(operating, var1, var2));
        operating = '';
    }
}