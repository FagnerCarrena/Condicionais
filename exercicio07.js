const readline = require("readline");

const interacaoUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function jogarJogoAdivinhacao() {
  const numeroEscolhido = gerarNumeroAleatorio();
  let tentativas = 0;

  console.log("Bem-vindo ao Jogo de Adivinhação!");
  console.log("Tente adivinhar o número entre 1 e 100.");

  function realizarTentativa() {
    interacaoUsuario.question("Digite um número: ", (tentativaInput) => {
      const tentativa = parseInt(tentativaInput);

      if (!isNaN(tentativa)) {
        tentativas++;

        if (tentativa === numeroEscolhido) {
          console.log(
            `Parabéns! Você acertou em ${tentativas} tentativas. O número era ${numeroEscolhido}.`
          );
          interacaoUsuario.close();
        } else if (tentativa < numeroEscolhido) {
          console.log("Tente novamente. O número é maior.");
          realizarTentativa();
        } else {
          console.log("Tente novamente. O número é menor.");
          realizarTentativa();
        }
      } else {
        console.log("Por favor, digite um número válido.");
        realizarTentativa();
      }
    });
  }

  realizarTentativa();
}

jogarJogoAdivinhacao();
