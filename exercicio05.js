const readline = require("readline");

const interacaoComUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularValorFinal(preco, desconto) {
  if (preco >= 0 && desconto >= 0 && desconto <= 100) {
    const descontoDecimal = desconto / 100;
    const valorComDesconto = preco * (1 - descontoDecimal);
    return valorComDesconto;
  } else {
    return "Valores inválidos. Certifique-se de que o preço e o desconto são não-negativos e o desconto está entre 0 e 100.";
  }
}

interacaoComUsuario.question("Digite o preço do produto: ", (precoInput) => {
  interacaoComUsuario.question(
    "Digite a porcentagem de desconto: ",
    (descontoInput) => {
      const preco = parseFloat(precoInput);
      const desconto = parseFloat(descontoInput);

      if (!isNaN(preco) && !isNaN(desconto)) {
        const valorFinal = calcularValorFinal(preco, desconto);
        console.log(
          `O valor final após aplicar um desconto de ${desconto}% é: ${valorFinal.toFixed(
            2
          )}`
        );
      } else {
        console.log("Por favor, digite valores válidos.");
      }

      interacaoComUsuario.close();
    }
  );
});
