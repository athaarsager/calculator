let firstNumber = 0;
let secondNumber = 0;
let operator;
let operatorPressed = false;
let numPressed = false;
let operationDone = false;

const screenText = document.querySelector("#screenText");
//14 max character count without decimal

let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (const numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            screenText.textContent = numberButton.textContent;
        } else if (operatorPressed) {
            screenText.textContent = numberButton.textContent;
            numPressed = true;
        } else if (operationDone) {
            screenText.textContent = numberButton.textContent;
            operationDone = false;
        } else {
            screenText.textContent += numberButton.textContent;
        }
    });
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    screenText.textContent = "0";
    firstNumber = 0;
    secondNumber = 0;
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
});

const equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
    if (operatorPressed === true && numPressed === false) {
        screenText.textContent = firstNumber;
        operatorPressed = false;
        return;
    }
    secondNumber = parseFloat(screenText.textContent);
    operate(operator, firstNumber, secondNumber)


});

function addNumbers(num1, num2) {
    return num1 + num2;
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
    numPressed = false;

    switch (operation) {
        case "+": screenText.textContent = addNumbers(firstNum, secondNum);
            break;
        case "-": screenText.textContent = subtractNumbers(firstNum, secondNum);
            break;
        case "x": screenText.textContent = multiplyNumbers(firstNum, secondNum);
            break;
        case "/": screenText.textContent = divideNumbers(firstNum, secondNum);
    }

    operationDone = true;
    firstNumber = 0;
    secondNumber = 0;
}
