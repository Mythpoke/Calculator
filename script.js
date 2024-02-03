const buttonsContainer = document.querySelector('.buttonsContainer');
const buttons = document.querySelector('.buttons');

let array = ["CLEAR", "DEL", "/","7","8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".","="]

for(let i = 0; i < 18; i++) {
    let button = document.createElement('button');
    buttons.appendChild(button);
    button.classList.add('button');
    button.textContent = array[i];
    if (i === 0) button.setAttribute('style', 'width: 190px; background-color: red');
    if (i === 17) button.setAttribute('style', 'width: 190px; background-color: green');
}

let numberFirst;
let operator;
let numberSecond;

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(numberFirst, operator, numberSecond) {
   // if "+" call add() and etc.
}

