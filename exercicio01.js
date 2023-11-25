const readline = require("readline");

const entradaUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarNumero(numero) {
  if (numero > 0) {
    return "O número é positivo.";
  } else if (numero < 0) {
    return "O número é negativo.";
  } else {
    return "O número é zero.";
  }
}

entradaUsuario.question("Digite um número: ", (numeroInput) => {
  const numero = parseFloat(numeroInput);

  if (!isNaN(numero)) {
    const resultado = verificarNumero(numero);
    console.log(resultado);
  } else {
    console.log("Por favor, digite um número válido.");
  }

  entradaUsuario.close();
});
