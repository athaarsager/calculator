let firstNumber = 0;
let secondNumber = 0;
let operator;
let operatorPressed = false;
let newNumPressed = false;
let clearText = false;

const screenText = document.querySelector("#screenText");
//14 max character count without decimal

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

const backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
    let currentNumber = screenText.textContent
    let lastIndex = currentNumber.length - 1;
    if (currentNumber.charAt(lastIndex) === "+" || currentNumber.charAt(lastIndex) === "-" ||
        currentNumber.charAt(lastIndex) === "/" || currentNumber.charAt(lastIndex) === "x") {
            operatorPressed = false;//undoes storing of operator
    }
    screenText.textContent = currentNumber.slice(0, -1);
    if (screenText.textContent === "") {
        screenText.textContent = "0";
    }
});

const signButton = document.querySelector("#signButton");
signButton.addEventListener("click", () => {
    let negative = "-";
    if (screenText.textContent.charAt(0) === "-") {
        screenText.textContent = screenText.textContent.substring(1);
    } else if (screenText.textContent === "0") {
        screenText.textContent = negative;
    } else {
        screenText.textContent = negative.concat(screenText.textContent);
    }
});

let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (const numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            screenText.textContent = numberButton.textContent;
            if (screenText.textContent === ".") {
                screenText.textContent = "0.";
            }
        } else if (screenText.textContent.includes(".") && numberButton.textContent === ".") {
            return;//removes ability to have multiple decimals
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

const plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", storeOperation);

const minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", storeOperation);

const timesButton = document.querySelector("#timesButton");
timesButton.addEventListener("click", storeOperation);

const divideButton = document.querySelector("#divideButton");
divideButton.addEventListener("click", storeOperation);

const equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
    if (operatorPressed === true && newNumPressed === false) {
        screenText.textContent = firstNumber;
        operatorPressed = false;
        return;
        //this prevents the calculator from operating if only one number has been pressed
    } else if (operatorPressed === false) {
        return;
    }//this prevents the calculator from operating if one number and one operator was pressed and equals hit twice
    secondNumber = parseFloat(screenText.textContent);//this is only spot that checks for newNumPressed to be true
    operate(operator, firstNumber, secondNumber)
});

function roundNumber(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}//e + decimals = 10 to the power of decimals
//function rounds the large number
//e- reverses the hugeness of the first number
//"Number" converts everything back to number

function addNumbers(num1, num2) {
    let result = num1 + num2;
    if (result.toString().length > 13 && result < 9999999999999) {
        result = roundNumber(result, (13 - Math.floor(result).toString().length));
        return result;
    } else if (result > 9999999999999) {
        result = result.toExponential(8)//this is the max that sits comfortably right now
        return result;
    } else {
        return result;
    }
}
function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    if (result.toString().length > 13 && result < 9999999999999) {
        result = roundNumber(result, (13 - Math.floor(result).toString().length));
        return result;
    } else if (result > 9999999999999) {
        result = result.toExponential(8)//this is the max that sits comfortably right now
        return result;
    } else {
        return result;
    }
}

function multiplyNumbers(num1, num2) {
    let result = num1 * num2;
    if (result.toString().length > 13 && result < 9999999999999) {
        result = roundNumber(result, (13 - Math.floor(result).toString().length));
        return result;
    } else if (result > 9999999999999) {
        result = result.toExponential(8)//this is the max that sits comfortably right now
        return result;
    } else {
        return result;
    }
}

function divideNumbers(num1, num2) {
    let result = num1 / num2;
    if (num2 === 0) {
        return "Don't Even Try"
    } else if (result.toString().length > 13 && result < 9999999999999) {
        result = roundNumber(result, (13 - Math.floor(result).toString().length));
        return result;
    } else if (result > 9999999999999) {
        result = result.toExponential(8)//this is the max that sits comfortably right now
        return result;
    } else {
        return result;
    }
}

function storeOperation(e) {
    if (operatorPressed && newNumPressed === false) {
        screenText.textContent = `${firstNumber}${e.target.textContent}`;
        return;
        //This ensures that number does not change if operator hit repeatedly
        //after just one number
    } else if (operatorPressed) {
        secondNumber = parseFloat(screenText.textContent);
        operate(operator, firstNumber, secondNumber);
    }//allows operation with string of operators and never pressing equals
    screenText.textContent += e.target.textContent;
    firstNumber = parseFloat(screenText.textContent);
    operator = e.target.textContent;
    operatorPressed = true;
    clearText = true;
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
