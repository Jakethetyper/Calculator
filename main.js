window.onload = (event) => {
    displayScreen(text);
}

let text = 0;
let var1 = 0;
let storedData = 0;
let operator = 0;



const digits = document.querySelector('.digits');

const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const times = document.querySelector('.times');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const subtract = document.querySelector('.subtract');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const add = document.querySelector('.add');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

clear.onclick = () => displayScreen('0');

zero.onclick = () => changeText(0);
one.onclick = () => changeText(1);
two.onclick = () => changeText(2);
three.onclick = () => changeText(3);
four.onclick = () => changeText(4);
five.onclick = () => changeText(5);
six.onclick = () => changeText(6);
seven.onclick = () => changeText(7);
eight.onclick = () => changeText(8);
nine.onclick = () => changeText(9);

add.onclick = () => calculate("add");
subtract.onclick = () => calculate("subtract");
times.onclick = () => calculate("times");
divide.onclick = () => calculate("divide");
equals.onclick = () => result();

percent.onclick = () => operate(1);
sign.onclick = () => operate(2);



function displayScreen(info) {
    digits.innerHTML = info;
    text = info;
    if (info == 0) {
        storedData = 0;
    }
}

function changeText(newNumber) {
    if (text<10000000000) {
        text = text*10;
        text += newNumber;
        displayScreen(text);
    } else {
        digits.innerHTML = 'You lose';
    }
}

function calculate(code) {
    if (storedData == 0) {
        storedData = text;
        text = 0;
        operator = code;
        return;
    } else {
        if (operator === "add") {
            storedData = text + storedData;
            displayScreen(storedData);
            text = 0;
            operator = code;
            return;
        } else if (operator === "subtract") {
            storedData = storedData - text;
            displayScreen(storedData);
            text = 0;
            operator = code;
            return;
        } else if (operator === "times") {
            storedData = storedData * text;
            displayScreen(storedData);
            text = 0;
            operator = code;
            return;
        } else if (operator === "divide") {
            storedData = storedData / text;
            displayScreen(storedData);
            text = 0;
            operator = code;
            return;
        } 
    }
}

function operate(operand) {
    if (operand == 1) {
        text = text/100;
        displayScreen(text);
    } else {
        text = text*-1;
        displayScreen(text);
    }
}

function result() {
    if (operator === "add") {
        text = storedData + text;
        displayScreen(text);
        storedData = text;
        text = 0;
        return;
    }else if (operator === "subtract") {
        text = storedData - text;
        displayScreen(text);
        storedData = text;
        text = 0;
        return;
    }else if (operator === "times") {
        text = storedData * text;
        displayScreen(text);
        storedData = text;
        text = 0;
        return;
    }else if (operator === "divide") {
        text = storedData / text;
        displayScreen(text);
        storedData = text;
        text = 0;
        return;
    }
}