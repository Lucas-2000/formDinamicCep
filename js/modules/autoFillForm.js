export default function autoFillForm() {
  const inputCep = document.getElementById("cep");
  const inputLogradouro = document.getElementById("logradouro");
  const inputBairro = document.getElementById("bairro");
  const inputCidade = document.getElementById("cidade");
  const inputUf = document.getElementById("uf");
  const findButton = document.getElementById("find");

  findButton.addEventListener("click", handleClick);

  function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    findCep(cep);
  }

  async function findCep(cep) {
    try {
      const cepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const cepJson = await cepResponse.json();
      inputLogradouro.value = cepJson.logradouro;
      inputBairro.value = cepJson.bairro;
      inputCidade.value = cepJson.localidade;
      inputUf.value = cepJson.uf;
    } catch (e) {
      window.alert(e);
    }
  }
}
