const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  const inputFirstNumber = document.querySelector("#input-first-number");
  const inputSecondNumber = document.querySelector("#input-second-number");
  const inputThirdNumber = document.querySelector("#input-third-number");

  const valueFirstNumber = inputFirstNumber.value;
  const valueSecondNumber = inputSecondNumber.value;
  const valueThirdNumber = inputThirdNumber.value;

  if (
    valueFirstNumber == "" ||
    valueSecondNumber == "" ||
    valueThirdNumber == ""
  ) {
    alert("Por favor, verifique os campos e tente novamente!");
  } else {
    checkNumbers(valueFirstNumber, valueSecondNumber, valueThirdNumber);
    clearInputs(inputFirstNumber, inputSecondNumber, inputThirdNumber);
  }
});

const checkNumbers = (
  valueFirstNumber,
  valueSecondNumber,
  valueThirdNumber
) => {
    let  result = '';

  if (
    valueFirstNumber > valueSecondNumber &&
    valueFirstNumber > valueThirdNumber
  ) {
    result = `${valueFirstNumber} - é o maior número presente.`;
  } else if (valueSecondNumber > valueFirstNumber && valueSecondNumber > valueThirdNumber) {
    result = `${valueSecondNumber} - é o maior número presente.`;
  } else if(valueThirdNumber > valueFirstNumber && valueThirdNumber > valueFirstNumber) {
    result = `${valueThirdNumber} - é o maior número presente.`;
  } else {
    result = 'Os números são iguais.';
  }

  showResult(result);
};

const showResult = result => {
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    const p = document.createElement('p');
    p.textContent = result;

    div.append(p, hr);
    button.after(div);
}

const clearInputs = (inputFirstNumber, inputSecondNumber, inputThirdNumber) => {
    inputFirstNumber.value = '';
    inputSecondNumber.value = '';
    inputThirdNumber.value = '';
}