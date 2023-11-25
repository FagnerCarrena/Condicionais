const readline = require("readline");

const interacaousuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

interacaousuario.question(
  "Digite um ano para verificar se é bissexto: ",
  (anoInput) => {
    const ano = parseInt(anoInput);

    if (!isNaN(ano)) {
      const resultado = verificarAnoBissexto(ano);
      if (resultado) {
        console.log(`${ano} é um ano bissexto.`);
      } else {
        console.log(`${ano} não é um ano bissexto.`);
      }
    } else {
      console.log("Por favor, digite um ano válido.");
    }

    interacaousuario.close();
  }
);
