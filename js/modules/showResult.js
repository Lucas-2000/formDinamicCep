export default function showResult() {
  const inputCep = document.getElementById("cep");
  const inputLogradouro = document.getElementById("logradouro");
  const inputBairro = document.getElementById("bairro");
  const inputCidade = document.getElementById("cidade");
  const inputUf = document.getElementById("uf");
  const submitButton = document.getElementById("submit");

  function handleClick(event) {
    event.preventDefault();
    buildAlert();
    clearFields();
  }

  function buildAlert() {
    const response = {
      cep: inputCep.value,
      logradouro: inputLogradouro.value,
      bairro: inputBairro.value,
      cidade: inputCidade.value,
      uf: inputUf.value,
    };
    return window.alert(
      "CEP: " +
        response.cep +
        "\n" +
        "Logradouro: " +
        response.logradouro +
        "\n" +
        "Bairro: " +
        response.bairro +
        "\n" +
        "Cidade: " +
        response.cidade +
        "\n" +
        "UF: " +
        response.uf
    );
  }

  function clearFields() {
    inputCep.value = "";
    inputLogradouro.value = "";
    inputBairro.value = "";
    inputCidade.value = "";
    inputUf.value = "";
  }

  submitButton.addEventListener("click", handleClick);
}
