const add = require('./add');

/**
 * Calculator
 */
const valueAInput = document.querySelector('#valueA');
const valueBInput = document.querySelector('#valueB');
const resultOutput = document.querySelector('#result');
const addButton = document.querySelector('#add');

function onClick() {
    resultOutput.innerHTML = add(valueAInput.value, valueBInput.value);
}

addButton.addEventListener('click', onClick);
