const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      resultShown = false;
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultShown = true;
      } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
        resultShown = false;
      }
    } else {
      if (resultShown) {
        // Start fresh if last action was "="
        if (/[0-9.]/.test(value)) {
          currentInput = value;
        } else {
          currentInput += value;
        }
        resultShown = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
