const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputAge = document.querySelector('#input-age');
    const valueAge = Number(inputAge.value);

    if(valueAge == '' || valueAge < 0) {
        alert('Campo vazio ou valor incorreto, por favor, verifique e tente novamente!');
    } else {
        verifyAge(valueAge);
        clearInput(inputAge);
    }
});

const verifyAge = valueAge => {
    let result = '';

    if(valueAge < 18) {
        result = (valueAge == 1) ? `${valueAge} ano - Você é menor de idade.` : `${valueAge} anos - Você é menor de idade.`;
    } else {
        result = `${valueAge} anos - Você é maior de idade.`;
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

const clearInput = inputAge => {
    inputAge.value = '';
}