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
      contadorElemento.textContent = contador;
    }, 1);
  }
}

// Chamando a função para iniciar o contador quando a página terminar de carregar
window.addEventListener("load", iniciarContador);
