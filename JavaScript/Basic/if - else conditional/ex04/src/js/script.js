const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputFirstNumber = document.querySelector('#input-first-number');
    const inputSecondNumber = document.querySelector('#input-second-number');

    const valueFirstNumber = Number(inputFirstNumber.value);
    const valueSecondNumber = Number(inputSecondNumber.value);

    if(valueFirstNumber == '' || valueSecondNumber == '') {
        alert('Por favor, verifique os campos e tente novamente!');
    } else {
        compareNumbers(valueFirstNumber, valueSecondNumber);
        clearInputs(inputFirstNumber, inputSecondNumber);
    }
});

const compareNumbers = (valueFirstNumber, valueSecondNumber) => {
    let result = '';

    if(valueFirstNumber > valueSecondNumber) {
        result = `O Primeiro Número (${valueFirstNumber}) é maior que o Segundo Número (${valueSecondNumber}).`;
    } else if(valueSecondNumber > valueFirstNumber) {
        result = `O Segundo Número (${valueSecondNumber}) é maior que o Primeiro Número (${valueFirstNumber}).`;
    } else {
        result = `O Primeiro (${valueFirstNumber}) e o Segundo Número (${valueSecondNumber}) são iguais.`;
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

const clearInputs = (inputFirstNumber, inputSecondNumber) => {
    inputFirstNumber.value = '';
    inputSecondNumber.value = '';
}