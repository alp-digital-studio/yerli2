
const display = document.getElementById("display");
const previous = document.getElementById("previous");
const historyList = document.getElementById("historyList");

let currentNumber = "0";
let firstNumber = null;
let operator = null;
let shouldReset = false;

function updateDisplay() {
    display.textContent = currentNumber;
}

function addNumber(number) {
    if (shouldReset) {
        currentNumber = number;
        shouldReset = false;
    } else if (currentNumber === "0") {
        currentNumber = number;
    } else if (currentNumber.length < 15) {
        currentNumber += number;
    }

    updateDisplay();
}

function addDecimal() {
    if (shouldReset) {
        currentNumber = "0";
        shouldReset = false;
    }

    if (!currentNumber.includes(".")) {
        currentNumber += ".";
    }

    updateDisplay();
}

function chooseOperator(selectedOperator) {
    if (operator !== null && !shouldReset) {
        calculate();
    }

    firstNumber = Number(currentNumber);
    operator = selectedOperator;
    previous.textContent = currentNumber + " " + selectedOperator;
    shouldReset = true;
}

function calculate() {
    if (operator === null || firstNumber === null) {
        return;
    }

    const secondNumber = Number(currentNumber);
    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        if (secondNumber === 0) {
            currentNumber = "Xəta";
            updateDisplay();
            previous.textContent = "Sıfıra bölmək olmaz!";
            operator = null;
            firstNumber = null;
            shouldReset = true;
            return;
        }

        result = firstNumber / secondNumber;
    }

    result = Number(result.toPrecision(12));

    const calculation = firstNumber + " " + operator + " " + secondNumber + " = " + result;

    addHistory(calculation);

    currentNumber = String(result);
    previous.textContent = calculation;

    firstNumber = null;
    operator = null;
    shouldReset = true;

    updateDisplay();
}

function clearCalculator() {
    currentNumber = "0";
    firstNumber = null;
    operator = null;
    shouldReset = false;

    previous.textContent = "";

    updateDisplay();
}

function deleteNumber() {
    if (shouldReset || currentNumber === "Xəta") {
        currentNumber = "0";
        shouldReset = false;
    } else {
        currentNumber = currentNumber.slice(0, -1);

        if (currentNumber === "" || currentNumber === "-") {
            currentNumber = "0";
        }
    }

    updateDisplay();
}

function changeSign() {
    if (currentNumber !== "0" && currentNumber !== "Xəta") {
        if (currentNumber.startsWith("-")) {
            currentNumber = currentNumber.slice(1);
        } else {
            currentNumber = "-" + currentNumber;
        }
    }

    updateDisplay();
}

function calculatePercent() {
    if (currentNumber === "Xəta") {
        return;
    }

    currentNumber = String(Number(currentNumber) / 100);
    updateDisplay();
}

function addHistory(calculation) {
    const item = document.createElement("li");

    item.textContent = calculation;

    historyList.prepend(item);

    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastElementChild);
    }
}

// Button events

document.querySelector(".buttons").addEventListener("click", function(event) {
    const button = event.target;

    if (button.tagName !== "BUTTON") {
        return;
    }

    if (button.dataset.number !== undefined) {
        addNumber(button.dataset.number);
    }

    if (button.dataset.operator) {
        chooseOperator(button.dataset.operator);
    }

    const action = button.dataset.action;

    if (action === "clear") {
        clearCalculator();
    } else if (action === "delete") {
        deleteNumber();
    } else if (action === "decimal") {
        addDecimal();
    } else if (action === "calculate") {
        calculate();
    } else if (action === "sign") {
        changeSign();
    } else if (action === "percent") {
        calculatePercent();
    }
});

// Keyboard support

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        addNumber(key);
    } else if (key === ".") {
        addDecimal();
    } else if (key === "+") {
        chooseOperator("+");
    } else if (key === "-") {
        chooseOperator("-");
    } else if (key === "*") {
        chooseOperator("*");
    } else if (key === "/") {
        event.preventDefault();
        chooseOperator("/");
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteNumber();
    } else if (key === "Escape") {
        clearCalculator();
    } else if (key === "%") {
        calculatePercent();
    }
});

updateDisplay();
