const readline = require("readline");

const ineracaoUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularOperacao(numero1, numero2, operacao) {
  switch (operacao) {
    case "adição":
      return numero1 + numero2;
    case "subtração":
      return numero1 - numero2;
    case "multiplicação":
      return numero1 * numero2;
    case "divisão":
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        return "Não é possível dividir por zero.";
      }
    default:
      return "Operação inválida. Por favor, escolha adição, subtração, multiplicação ou divisão.";
  }
}

ineracaoUsuario.question("Digite o primeiro número: ", (numero1Input) => {
  ineracaoUsuario.question("Digite o segundo número: ", (numero2Input) => {
    ineracaoUsuario.question(
      "Digite a operação (adição, subtração, multiplicação, divisão): ",
      (operacaoInput) => {
        const numero1 = parseFloat(numero1Input);
        const numero2 = parseFloat(numero2Input);

        if (!isNaN(numero1) && !isNaN(numero2)) {
          const resultado = calcularOperacao(
            numero1,
            numero2,
            operacaoInput.toLowerCase()
          );
          console.log(`O resultado da operação é: ${resultado}`);
        } else {
          console.log("Por favor, digite números válidos.");
        }

        ineracaoUsuario.close();
      }
    );
  });
});
