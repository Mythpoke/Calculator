const buttons = document.querySelector('.buttons');
const topRow = document.querySelector('.topRow');
const middleRow = document.querySelector('.middleRow');
const bottomRow = document.querySelector('.bottomRow');

let arrayTop = ["CLEAR", "DEL", "/"];
let arrayMiddle = ["7","8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "+"];
let arrayBottom = ["C", "0", "="];

for(let i = 0; i < 3; i++) {
    let button = document.createElement('button');
    topRow.appendChild(button);
    button.classList.add('button');
    button.textContent = arrayTop[i];
    if (i === 0) button.setAttribute('style', 'width: 190px; background-color: red');
 }

 for(let i = 0; i < 12; i++) {
    let button = document.createElement('button');
    middleRow.appendChild(button);
    button.classList.add('button');
    button.textContent = arrayMiddle[i];
 }

 for(let i = 0; i < 3; i++) {
    let button = document.createElement('button');
    bottomRow.appendChild(button);
    button.classList.add('button');
    button.textContent = arrayBottom[i];
    if (i === 2) button.setAttribute('style', 'width: 190px; background-color: green');
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

