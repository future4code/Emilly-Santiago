// Exercicio 1
// a) Acessamos parâmetros passados no terminal usando: const nome = process.argv[2]
// b)
const nome = process.argv[2];
const idade = process.argv[3];

nome && idade
  ? console.log("\x1b[33m%s\x1b[0m", `Olá, ${nome}! Você tem ${idade} anos.`)
  : console.log("Digite o nome e a idade respectivamente");
// c)
const idadeMais7 = Number(idade) + 7;
nome &&
  idade &&
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMais7}`
  );

