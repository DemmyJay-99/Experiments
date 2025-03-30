
let display = document.getElementById('display');
let calculation = '';

function addNumber(num) {
    calculation += num.toString();
    display.value = calculation;
}

function addOperator(op) {
    calculation += op;
    display.value = calculation;
}

function deleteChar() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    try {
        const result = eval(calculation);
        display.value = result;
        calculation = result.toString();
    } catch (error) {
        display.value = 'Error';
        calculation = '';
    }
}