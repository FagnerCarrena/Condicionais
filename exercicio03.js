const readline = require("readline");

const interacaousuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function determinarCategoriaIdade(idade) {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

interacaousuario.question("Digite a idade da pessoa: ", (idadeInput) => {
  const idade = parseInt(idadeInput);

  if (!isNaN(idade)) {
    const categoria = determinarCategoriaIdade(idade);
    console.log(`A pessoa é ${categoria}.`);
  } else {
    console.log("Por favor, digite uma idade válida.");
  }

  interacaousuario.close();
});
