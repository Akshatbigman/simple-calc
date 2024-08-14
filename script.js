const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            if (currentInput && previousInput && operator) {
                currentInput = eval(previousInput + operator + currentInput);
                display.value = currentInput;
                operator = '';
                previousInput = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                if (operator) {
                    previousInput = eval(previousInput + operator + currentInput);
                } else {
                    previousInput = currentInput;
                }
                currentInput = '';
                operator = value;
                display.value = previousInput + operator;
            }
        } else {
            currentInput += value;
            display.value = previousInput + operator + currentInput;
        }
    });
});
