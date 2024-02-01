const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputNumber = document.querySelector('#input-number');
    const valueNumber = Number(inputNumber.value); // Convert type of to 'Number'

    if(valueNumber == '' || valueNumber < 0) {
        alert('Campo vazio ou número inválido, por favor, verifique e tente novamente.');
    } else {
        checkNumber(valueNumber);
        clearInput(inputNumber);

    }
});

const checkNumber = (valueNumber) => {
    let result = '';

    if(valueNumber % 2 == 0) {
        result = `${valueNumber} - Número Par`;
    } else {
        result = `${valueNumber} - Número Ímpar`;
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

const clearInput = inputNumber => {
    inputNumber.value = '';
}