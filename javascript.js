let firstNumber;
let secondNumber;
let operator;
let displayValue;

let buttons = document.querySelectorAll("button");
buttons = Array.from(buttons);

for (let button of buttons) {
    button.style.backgroundColor = "rgb(116, 156, 181)";//have to declare in-line, otherwise doesn't read css prop.
    button.addEventListener("mousedown", () => { //can set to variable, but split RGB can't read variable
        button.style.backgroundColor = darkenHue(toHSL(splitRGB(button.style.backgroundColor)), 10);
    });
    button.addEventListener("mouseup", () => {
        button.style.backgroundColor = "rgb(116, 156, 181)"//can't use css variable here either. split RGB can't read it.
    });
}

const screenText = document.querySelector("#screenText");
let numberButtons = document.querySelectorAll(".numberButton");
numberButtons = Array.from(numberButtons);

for (let numberButton of numberButtons) {

    numberButton.addEventListener("click", () => {
        screenText.textContent = numberButton.textContent;
    });
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

function splitRGB(input) {
    let rgb = input.split(", ");
    let r = parseInt(rgb[0].substring(4));
    let g = rgb[1];
    let b = parseInt(rgb[2].substring(0, rgb[2].length));
    const output = [r, g, b];

    return output;
}

function toHSL(input) {
    let r = input[0];
    let g = input[1];
    let b = input[2];

    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;
    return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
    ];
}

function darkenHue(color, percent) {

    color[2] = color[2] - percent;

    return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
}
