const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  const inputFirstNumber = document.querySelector("#input-first-number");
  const inputSecondNumber = document.querySelector("#input-second-number");
  const inputThirdNumber = document.querySelector("#input-third-number");

  const valueFirstNumber = inputFirstNumber.value;
  const valueSecondNumber = inputSecondNumber.value;
  const valueThirdNumber = inputThirdNumber.value;

  if (
    valueFirstNumber === "" ||
    valueSecondNumber === "" ||
    valueThirdNumber === ""
  ) {
    alert("Por favor, verifique os campos e tente novamente!");
  } else {
    checkSides(valueFirstNumber, valueSecondNumber, valueThirdNumber);
    clearInputs(inputFirstNumber, inputSecondNumber, inputThirdNumber);
  }
});

const checkSides = (valueFirstNumber, valueSecondNumber, valueThirdNumber) => {
  let result = "";

  if (
    valueFirstNumber === valueSecondNumber &&
    valueSecondNumber === valueThirdNumber &&
    valueFirstNumber === valueThirdNumber
  ) {
    result =
      "Todos os lados do Triângulo são iguais, portanto, é um Equilátero.";
  } else if (
    valueFirstNumber !== valueSecondNumber &&
    valueSecondNumber !== valueThirdNumber &&
    valueFirstNumber !== valueThirdNumber
  ) {
    result =
      "Todos os lados do Triângulo são diferentes, portanto, é um Escaleno.";
  } else {
    result = "O Triângulo possui dois lados iguais, portanto, é um Isósceles.";
  }

  showResult(result);
};

const showResult = (result) => {
  const div = document.createElement("div");
  const hr = document.createElement("hr");
  const p = document.createElement("p");
  p.textContent = result;

  div.append(p, hr);
  button.after(div);
};

const clearInputs = (inputFirstNumber, inputSecondNumber, inputThirdNumber) => {
  inputFirstNumber.value = "";
  inputSecondNumber.value = "";
  inputThirdNumber.value = "";
};