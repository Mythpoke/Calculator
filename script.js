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

let number = '';
let numberFirst = '';
let operator;
let numberSecond = '';
let valuePlus = 0;
let valueMinus = 0;
let valueEqual = 0
let valueMultiply = 0;
let valueDivide = 0;
let result;

array2[14].addEventListener('click', () => {        //add
   
    if (valueMinus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);    

        operator = '-';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '+';
        valuePlus++;
        valueMinus--;
        
    }
    else if (valueMultiply === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '*';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '+';
        valueMultiply--;
        valuePlus++;
    }
    else if (valueDivide === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '/';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '+';
        valueDivide--;
        valuePlus++;
    }
    else if (valueEqual === 1) {
        operator = '+';
        display.textContent = result + '+';                 
        valueEqual--;
        valuePlus++;
    }
    else if(valuePlus === 0) { 
        numberFirst = number;
        number = '';

        display.textContent += '+';
        operator = '+';
        valuePlus++;
        console.log(valuePlus + "valuePlus");
    }
    
    else if(valuePlus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);

        operator = '+';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '+';
    }
});

array2[10].addEventListener('click', () =>{     //substract
    
    if (valuePlus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '+';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '-';
        valuePlus--;
        valueMinus++;
    }
    else if (valueMultiply === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '*';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '-';
        valueMultiply--;
        valueMinus++;
    }
    else if (valueDivide === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '/';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '-';
        valueDivide--;
        valueMinus++;
    }
    else if (valueEqual === 1) {
        operator = '-';
        display.textContent = result + '-';
        valueEqual--;
        valueMinus++;
    }
    else if(valueMinus === 0) {
        numberFirst = number;
        number = '';

        display.textContent += '-';
        operator = '-';
        valueMinus++;
    }
    else if(valueMinus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);     
        numberSecond = Number(numberSecond);

        operator = '-';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '-';
    }

})



array2[6].addEventListener('click', () =>{    //multiply
    
    if (valuePlus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '+';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '*';
        valuePlus--;
        valueMultiply++;
    }
    else if (valueMinus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);    

        operator = '-';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '*';
        valueMultiply++;
        valueMinus--;
    }
    else if (valueDivide === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);    

        operator = '/';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '*';
        valueMultiply++;
        valueDivide--;
    }
    else if (valueEqual === 1) {
        operator = '*';
        display.textContent = result + '*';
        valueEqual--;
        valueMultiply++;
    }
    else if(valueMultiply === 0) {
        numberFirst = number;
        number = '';
        operator = '*';
        display.textContent += '*';
        valueMultiply++;
    }
    else if(valueMultiply === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '*';
    }
});
array2[2].addEventListener('click', () =>{      //Divide

    if (valuePlus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        operator = '+';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '/';
        valuePlus--;
        valueDivide++;
    }
    else if (valueMinus === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);    

        operator = '-';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '/';
        valueDivide++;
        valueMinus--;
    }
    else if (valueMultiply === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);
        numberSecond = Number(numberSecond);    

        operator = '*';
        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '/';
        valueDivide++;
        valueMultiply--;
    }
    else if (valueEqual === 1) {
        operator = '/';
        display.textContent = result + '/';
        valueEqual--;
        valueDivide++;
    }
    else if(valueDivide === 0) {
        numberFirst = number;
        number = '';
        operator = '/';
        display.textContent += '/';
        valueDivide++;
    }
    else if(valueDivide === 1) {
        numberSecond = number;
        number = '';

        numberFirst = Number(numberFirst);          
        numberSecond = Number(numberSecond);

        result = operate(numberFirst, operator, numberSecond);
        numberFirst = result;
        display.textContent = result + '/';
    }
});
// Others
array2[17].addEventListener('click', () =>{ //"="

    if(valuePlus === 1) operator = '+';
    if(valueMinus === 1) operator = '-';
    if(valueMultiply === 1) operator = '*';
    if(valueDivide === 1) operator = '/';

    valuePlus = 0;
    valueMinus = 0; 
    valueMultiply = 0;
    valueDivide = 0;

    numberSecond = number;
    number = '';
    numberSecond = Number(numberSecond);
    numberFirst = Number(numberFirst);
    result = operate(numberFirst, operator, numberSecond);
    numberFirst = result;
    display.textContent = result;
    valueEqual++;
    
});
array2[0].addEventListener('click', () =>{  //Clear
    display.textContent = '';
    number = '';
    numberFirst = '';
    numberSecond = '';
    valuePlus = 0;
    valueMinus = 0;
    valueEqual = 0;
    valueMultiply = 0;
    valueDivide = 0;
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

