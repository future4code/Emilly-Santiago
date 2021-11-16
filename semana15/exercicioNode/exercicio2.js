const operacao = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

switch (operacao) {
  case "add":
    numero1 && numero2
      ? console.log("\x1b[31m", `Resposta: ${numero1 + numero2}`)
      : console.log("Digite os 2 numeros da operação");
    break;

  case "sub":
    numero1 && numero2
      ? console.log("\x1b[31m", `Resposta: ${numero1 - numero2}`)
      : console.log("Digite os 2 numeros da operação");
    break;

  case "mult":
    numero1 && numero2
      ? console.log("\x1b[31m", `Resposta: ${numero1 * numero2}`)
      : console.log("Digite os 2 numeros da operação");
    break;

  case "div":
    numero1 && numero2
      ? console.log("\x1b[31m", `Resposta: ${numero1 / numero2}`)
      : console.log("Digite os 2 numeros da operação");
    break;

  default:
    console.log("\x1b[31m", "Operação nao reconhecida");
    break;
}
