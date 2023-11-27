let firstNumber;
let secondNumber;
let operator;

const screenText = document.querySelector("#screenText");

let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (const numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            screenText.textContent = numberButton.textContent;
        } else if (screenText.textContent.slice(-1) === "+" || screenText.textContent.slice(-1) === "-" ||
            screenText.textContent.slice(-1) === "x" || screenText.textContent.slice(-1) === "/") {
            screenText.textContent = numberButton.textContent;
        }
        else {
            screenText.textContent += numberButton.textContent;
        }
    });
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    screenText.textContent = "0";//Remember to add more later for clearing memory of operation
    displayValue = screenText.textContent;
});

const plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", () => {
    screenText.textContent += "+";
    firstNumber = parseFloat(screenText.textContent);
    operator = "+";
});

const equalsButton = document.querySelector("#equalsButton");
equalsButton.addEventListener("click", () => {
    secondNumber = parseFloat(screenText.textContent);
    operate(operator, firstNumber, secondNumber)

})

//display one number and one operator at a time. Don't need number to blink.
//will need to edit numberbutton event listener function to make this work... 
//...or build it into operator event listener function
//write "when plus sign pressed"
//function updates display to add plus sign to right of number
//when plus sign pressed, first number is stored in variable
//When equals sign pressed, store second number in varaible and perform operation based on operator sign
//Need to store each number in variable, or will operate function remember them?

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
    switch (operation) {
        case "+": screenText.textContent = addNumbers(firstNum, secondNum);
            break;
        case "-": screenText.textContent = subtractNumbers(firstNum, secondNum);
            break;
        case "x": screenText.textContent = multiplyNumbers(firstNum, secondNum);
            break;
        case "/": screenText.textContent = divideNumbers(firstNum, secondNum);
    }
    //change value of operator based on clicked button
    //run the selected function
    //firstNumber, secondNumber, and operator as inputs to this function?
}
