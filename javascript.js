let firstNumber = 0;
let secondNumber = 0;
let operator;
let operatorPressed = false;
let newNumPressed = false;
let clearText = false;

const screenText = document.querySelector("#screenText");
//14 max character count without decimal

let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (const numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            screenText.textContent = numberButton.textContent;
        } else if (clearText) {
            screenText.textContent = numberButton.textContent;
            newNumPressed = true;
            clearText = false;
        } else {
            if (screenText.textContent.length === 13) {
                return;
            }
            screenText.textContent += numberButton.textContent;
        }
    });
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    screenText.textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
    operatorPressed = false;
    newNumPressed = false;
    operationDone = false;
    clearText = false;
});

const plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", () => {
    if (operatorPressed) {
        secondNumber = parseFloat(screenText.textContent);
        operate(operator, firstNumber, secondNumber);
    }
    screenText.textContent += "+";
    firstNumber = parseFloat(screenText.textContent);
    operator = "+";
    operatorPressed = true;
    clearText = true;
});

const equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
    if (operatorPressed === true && newNumPressed === false) {
        screenText.textContent = firstNumber;
        operatorPressed = false;
        return;
    }
    secondNumber = parseFloat(screenText.textContent);
    operate(operator, firstNumber, secondNumber)


});
//need to round number to max string length - integerlength (aka Math.floor?)
//maybe convert numbers higher than max string length to exponential notation?

function roundNumber(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}//e + decimals = 10 to the power of decimals
//function rounds the large number
//e- reverses the hugeness of the first number
//"Number" converts everything back to number

function addNumbers(num1, num2) {
    let result = num1 + num2;
    if (result.toString().length > 13 & result < 9999999999999) {
        result = roundNumber(result, (13 - Math.floor(result).toString.length));
        return result;
    } else {
        return result;
    }
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function operate(operation, firstNum, secondNum) {

    operatorPressed = false;
    newNumPressed = false;

    switch (operation) {
        case "+": screenText.textContent = addNumbers(firstNum, secondNum);
            break;
        case "-": screenText.textContent = subtractNumbers(firstNum, secondNum);
            break;
        case "x": screenText.textContent = multiplyNumbers(firstNum, secondNum);
            break;
        case "/": screenText.textContent = divideNumbers(firstNum, secondNum);
    }

    clearText = true;
    firstNumber = 0;
    secondNumber = 0;
}
