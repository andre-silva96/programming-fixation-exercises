const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputNumber = document.querySelector('#input-number');
    const valueNumber = Number(inputNumber.value);

    checkNumber(valueNumber);
    clearInput(inputNumber);
});

const checkNumber = valueNumber => {
    let result = '';

    if(valueNumber > 0) {
        result = `${valueNumber} - Número Positivo`;
    } else if (valueNumber === 0) {
        result = '0 - Zero';
    } else {
        result = `${valueNumber} - Número Negativo`;
    }

    showResult(result);
}

const showResult = result => {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    const p = document.createElement('p');
    p.textContent = result;

    div.append(p, hr);
    button.after(div);
}

const clearInput = input => {
    input.value = '';
}