let expression = '';

function appendCharacter(char) {
    expression += char;
    updateDisplay();
}

function appendOperator(operator) {
    if (expression.length > 0 && !isNaN(expression[expression.length - 1])) {
        expression += operator;
        updateDisplay();
    }
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById('result').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}

function calculateLog() {
    try {
        const result = Math.log10(eval(expression));
        document.getElementById('result').value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}

function clearResult() {
    expression = '';
    updateDisplay();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = expression;
}

// Add event listeners to number buttons for blinking effect
document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('blink');
        setTimeout(() => {
            button.classList.remove('blink');
        }, 600); // 600ms duration for the blinking effect
    });
});
