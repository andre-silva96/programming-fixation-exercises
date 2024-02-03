const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputNumber = document.querySelector('#input-number');
    const valueNumber = Number(inputNumber.value);

    if(valueNumber == '') {
        alert('Por favor, preencha o campo!');
    } else {
        checkNote(valueNumber);
        clearInput(inputNumber);
    }
});

const checkNote = valueNumber => {
    let result = '';
    let finalNote = (valueNumber / 4).toFixed(1);

    if(finalNote < 6) {
        result = `Nos 4 bimestres, o aluno possui média final ${finalNote}, e está REPROVADO.`;
    } else {
        result = `Nos 4 bimestres, o aluno possui méida fina ${finalNote}, e está APROVADO.`;
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