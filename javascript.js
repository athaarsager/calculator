let firstNumber;
let secondNumber;
let operator;
let displayValue;

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);

for (let button of buttons) {
    button.addEventListener("click", () => {
        button.style.backgroundColor = "rgb(255, 255, 255)";
        console.log("I was clicked!");
    })
}

const screenText = document.querySelector("#screenText");
let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (let numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        screenText.textContent = numberButton.textContent;
        console.log("I was clicked!");
    })
}

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

function operate(operator, firstNumber, secondNumber) {
    //change value of operator based on clicked button
    //run the selected function
    //firstNumber, secondNumber, and operator as inputs to this function?
}
