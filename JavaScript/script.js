// Definindo o valor máximo do contador
var maxCount = 828000000;

// Função para iniciar o contador
function iniciarContador() {

  // Definindo o valor inicial do contador
  var contador = 0;

  // Obtendo o elemento HTML onde o contador será exibido
  var contadorElemento = document.getElementById("contador");

  if (contadorElemento) {

    // Definindo o intervalo de atualização do contador (a cada 1 milissegundo)
    var intervalo = setInterval(function () {
      // Atualizando o valor do contador
      contador++;
  
      // Exibindo o valor atualizado no elemento HTML
      contadorElemento.textContent = contador;
  
      // Verificando se o contador atingiu o valor máximo
      if (contador === maxCount) {
        // Parando o intervalo de atualização
        clearInterval(intervalo);
      }
    }, 1);
    
  }

}

// Chamando a função para iniciar o contador quando a página terminar de carregar
window.addEventListener("load", iniciarContador);
