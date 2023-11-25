const readline = require("readline");

const digiteAi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function converterNotaParaConceito(nota) {
  if (nota >= 90) {
    return "A";
  } else if (nota >= 80) {
    return "B";
  } else if (nota >= 70) {
    return "C";
  } else if (nota >= 60) {
    return "D";
  } else {
    return "F";
  }
}

digiteAi.question("Digite a nota numérica: ", (notaInput) => {
  const nota = parseFloat(notaInput);

  if (!isNaN(nota)) {
    const conceito = converterNotaParaConceito(nota);
    console.log(`O conceito correspondente à nota ${nota} é: ${conceito}`);
  } else {
    console.log("Por favor, digite uma nota numérica válida.");
  }

  digiteAi.close();
});
