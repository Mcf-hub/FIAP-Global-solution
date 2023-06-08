// Definindo o valor máximo do contador
var maxCount = 828000000;

// Definindo o número de pulos a cada atualização
var pulo = 9934;

// Função para iniciar o contador
function iniciarContador() {
  // Definindo o valor inicial do contador
  var contador = 0;

  // Obtendo o elemento HTML onde o contador será exibido
  var contadorElemento = document.getElementById("contador");

  if (contadorElemento) {
    // Exibindo o valor inicial no elemento HTML
    contadorElemento.textContent = contador.toLocaleString();

    // Definindo o intervalo de atualização do contador
    var intervalo = setInterval(function () {
      // Atualizando o valor do contador
      contador += pulo;

      // Verificando se o contador ultrapassou o valor máximo
      if (contador >= maxCount) {
        // Ajustando o contador para o valor máximo
        contador = maxCount;

        // Parando o intervalo de atualização
        clearInterval(intervalo);
      }

      // Exibindo o valor atualizado no elemento HTML
      contadorElemento.textContent = contador.toLocaleString();
    }, 1);
  }
}

// Chamando a função para iniciar o contador quando o DOM estiver pronto
window.addEventListener("DOMContentLoaded", iniciarContador);

// Obtendo o elemento HTML onde o contador será exibido
var contadorElemento = document.getElementById("contadormortes");

// Função para atualizar o contador
function atualizarContador() {
  // Definindo o valor inicial do contador
  var contador = 0;

  // Definindo o intervalo de atualização do contador (a cada 4 segundos)
  setInterval(function () {
    // Incrementando o valor do contador
    contador++;

    // Exibindo o valor atualizado no elemento HTML
    contadorElemento.textContent = contador.toLocaleString();
  }, 4000); // 4000 milissegundos = 4 segundos
}

// Chamando a função para iniciar o contador quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", atualizarContador);
