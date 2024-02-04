const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    const inputLetter = document.querySelector('#input-letter');
    const valueLetter = inputLetter.value;

    if(inputLetter.value == '') {
        alert('Campo vazio, por favor, verifique e tente novamente!');
    } else {
        checkLetter(valueLetter);
        clearInput(inputLetter);
    }
});

const checkLetter = valueLetter => {
    const vogals = 'aeiou';
    let result = '';

    if(vogals.includes(valueLetter)) {
        result = `${valueLetter} - é uma vogal.`;
    } else {
        result = `${valueLetter} - é uma consoante.`
    }

    showLetter(result);
}

const showLetter = result => {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    const p = document.createElement('p');
    p.textContent = result;

    div.append(p, hr);
    button.after(div);
}

const clearInput = inputLetter => {
    inputLetter.value = '';
}