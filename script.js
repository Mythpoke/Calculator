const buttonsContainer = document.querySelector('.buttonsContainer');
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');
let displayValue;

const array = ["CLEAR", "DEL", "/","7","8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".","="]
const array2= [];

for(let i = 0; i < 18; i++) {
    let button = document.createElement('button');
    buttons.appendChild(button);
    button.classList.add('button');
    button.textContent = array[i];
    array2.push(button);
    if (i === 0) button.setAttribute('style', 'width: 190px; background-color: red');
    if (i === 17) button.setAttribute('style', 'width: 190px; background-color: green');
}
// Numbers
let number = '';
let numberFirst = '';
let operator;
let numberSecond = '';
let valuePlus = 0;
let valueMinus = 0;

array2[15].addEventListener('click', () =>{
    display.textContent += '0';
    number += '0';
});
array2[11].addEventListener('click', () =>{
    display.textContent += '1';
    number += '1';
});
array2[12].addEventListener('click', () =>{
    display.textContent += '2';
    number += '2';
});
array2[13].addEventListener('click', () =>{
    display.textContent += '3';
    number += '3';
});
array2[7].addEventListener('click', () =>{
    display.textContent += '4';
    number += '4';
});
array2[8].addEventListener('click', () =>{
    display.textContent += '5';
    number += '5';
});
array2[9].addEventListener('click', () =>{
    display.textContent += '6';
    number += '6';
});
array2[3].addEventListener('click', () =>{
    display.textContent += '7';
    number += '7';
});
array2[4].addEventListener('click', () =>{
    display.textContent += '8';
    number += '8';
});
array2[5].addEventListener('click', () =>{
    display.textContent += '9';
    number += '9';
});
// Operators
array2[14].addEventListener('click', () =>{
    console.log(valuePlus);
    valuePlus++;
    if (valuePlus === 2) {  // zadeklarowac zmienna globalna, wstawic ja tu i przypisac jej wartosc danej liczby
        valuePlus = 1;
        operator = '+';
        numberSecond = number;
        number = '';
        numberSecond = Number(numberSecond);
        numberFirst = Number(numberFirst);
        let result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result  + '+';
    }
    else if (valuePlus < 2) {
        display.textContent += '+';
        operator = '+';
        numberFirst = number;
        number = '';
        
    }
   
    
});
array2[10].addEventListener('click', () =>{
    console.log(valueMinus);
    valueMinus++;
    if (valueMinus === 2) {
        valueMinus = 1;
        operator = '-';
        numberSecond = number;
        number = '';
        numberSecond = Number(numberSecond);
        numberFirst = Number(numberFirst);
        let result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result  + '-';    
    }
    else if (valueMinus < 2) {
        display.textContent += '-';
        operator = '-';
        numberFirst = number;
        number = '';
        
    }
});
array2[6].addEventListener('click', () =>{
    display.textContent += '*';
    operator = '*';
    numberFirst = number;
    number = '';
});
array2[2].addEventListener('click', () =>{
    display.textContent += '/';
    operator = '/';
    numberFirst = number;
    number = '';
});
// Others
array2[17].addEventListener('click', () =>{ //"="
    numberSecond = number;
    numberSecond = Number(numberSecond);
    numberFirst = Number(numberFirst);
   display.textContent = operate(numberFirst, operator, numberSecond);
});
array2[0].addEventListener('click', () =>{  //Clear
    display.textContent = '';
    number = '';
    numberFirst = '';
    numberSecond = '';
    valuePlus = 0;
    valueMinus = 0;
});
array2[1].addEventListener('click', () =>{  //Delete
    display.textContent = '';
});
array2[16].addEventListener('click', () =>{
    display.textContent += '.';
});

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
   
    if(operator === '+') return add(numberFirst, numberSecond);
    else if(operator === '-') return substract(numberFirst, numberSecond);
    else if(operator === '*') return multiply(numberFirst, numberSecond);
    else return divide(numberFirst, numberSecond); 
}

