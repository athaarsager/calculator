let firstNumber;
let secondNumber;
let operator;
let displayValue;


let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);//This may no longer be needed since I moved hover to css

const screenText = document.querySelector("#screenText");

let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (const numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            screenText.textContent = numberButton.textContent;
        } else {
            screenText.textContent += numberButton.textContent;
            displayValue = screenText.textContent;
        }
    });
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    screenText.textContent = "0";//Remember to add more later
    displayValue = screenText.textContent;
});

//display one number and one operator at a time. Don't need number to blink.
//will need to edit numberbutton event listener function to make this work... 
//...or build it into operator event listener function
//write "when plus sign pressed"
//function updates display to add plus sign to right of number
//When equals sign pressed, perform operation based on operator sign
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

function operate(operator, firstNumber, secondNumber) {
    //change value of operator based on clicked button
    //run the selected function
    //firstNumber, secondNumber, and operator as inputs to this function?
}
