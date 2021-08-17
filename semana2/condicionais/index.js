// Exercícios de interpretção de código

/* 1.a) O Código apenas lê um numero digitado pelo usuario  e testa se esse numero é par.
 Se for par eme imprime no console: Passou no teste, caso contrário: Não passou no teste
 */
// 1.b) Apenas para os números divisíveis por 2. Ou seja, todos os numeros pares.
// 1.c) A mensagem: Não passou no teste será exibida para todos os números que não são divisíveis por 2. Ou seja, todos os numéros ímpares.

// 2.a) O código recebe uma fruta e identificar quanto ela custa. Depois, imprime o resultado numa frase com o nome e o valor da fruta digitada.
// 2.b) O preço da fruta  Maçã  é R$  2.25
// 2.c) O preço da fruta  Pêra  é  R$  5

//3.a) A primeira linha de código recebe um número digitado pelo usuário. O código também converte o valor de entrada para variável do tipo Number.
/*3.b) Se o usuário digitar 10, será impresso no console: Esse número passou no teste.
Se o usuário digitar -10 não será impresso nada no console.*/
//3.d) Haverá um erro informando que a variável mensagem não foi declarada pq ela só existe dentro do bloco de escopo do if.

// Exercício de escrita de código

//1)
var idade = Number(prompt("Digite sua idade"));

if (idade >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você nao pode dirigir");
}

//2)
var turno = prompt(
  "Qual o turno qu você estuda? Digite M para Matutino, V para vespertino e N para noturno."
);
turno = turno.toUpperCase();

if (turno == "M") {
  console.log("Bom Dia!");
} else if (turno == "V") {
  console.log("Boa Tarde!");
} else if (turno == "N") {
  console.log("Boa Noite!");
} else {
  console.log("Digite uma letra válida");
}

//3)
var turnoSwitch = prompt(
  "Qual o turno qu você estuda? Digite M para Matutino, V para vespertino e N para noturno."
);
turnoSwitch = turnoSwitch.toUpperCase();

switch (turnoSwitch) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("Digite uma letra válida");
}

//4)
var genero = prompt("Qual o genero do filme que vc vai assistir?");
var preco = Number(prompt("Qual o preço do ingresso que vc vai assistir?"));
if (genero == "fantasia" && preco < 15) {
  console.log("Bom filme");
} else {
  console.log("Escolha outro filme :(");
}

// Desafio 1
var genero2 = prompt("Qual o genero do filme que vc vai assistir?");
var preco2 = Number(prompt("Qual o preço do ingresso que vc vai assistir?"));

if (genero2 == "fantasia" && preco2 < 15) {
  let lanchinho = prompt("Qual snack que você quer comprar?");
  console.log("Bom filme");
  console.log(`Aproveite o seu ${lanchinho}`);
} else {
  console.log("Escolha outro filme :(");
}

// Desafio 2
// criando as variáveis
var nomeCliente = prompt("Digite seu nome completo");
var tipoJogo = prompt(
  "Digite o tipo de jogo. IN - internacioanl e DO - doméstico"
);
var etapaJogo = prompt(
  "Digite a etapa do jogo. SF - semi-final, DT - decisão de terceiros, FI - final"
);
var categoria = Number(prompt("Digite a categoria. Que pode ser 1, 2, 3 ou 4"));
var quantidade = Number(prompt("Digite o número de ingresso que vc precisa"));
var valorIngresso = 0;

// inserindo a logica dos valores dos ingressos
if (etapaJogo == "SF") {
  if (categoria == 1) {
    valorIngresso = 1320;
  } else if (categoria == 2) {
    valorIngresso = 880;
  } else if (categoria == 3) {
    valorIngresso = 550;
  } else if (categoria == 4) {
    valorIngresso = 220;
  }
} else if (etapaJogo == "DT") {
  if (categoria == 1) {
    valorIngresso = 660;
  } else if (categoria == 2) {
    valorIngresso = 440;
  } else if (categoria == 3) {
    valorIngresso = 330;
  } else if (categoria == 4) {
    valorIngresso = 170;
  }
} else if ((etapaJogo = "FI")) {
  if (categoria == 1) {
    valorIngresso = 1980;
  } else if (categoria == 2) {
    valorIngresso = 1320;
  } else if (categoria == 3) {
    valorIngresso = 880;
  } else if (categoria == 4) {
    valorIngresso = 330;
  }
}

// imprimindo no console os resultados encotrados
if (tipoJogo == "DO") {
  console.log("---Dados da compra---");
  console.log("Nome do cliente: ", nomeCliente);
  console.log("Tipo do jogo: Nacional");

  if (etapaJogo == "SF") {
    console.log("Etapa do jogo: Semi-Final");
  } else if (etapaJogo == "DT") {
    console.log("Etapa do jogo: Decisão de Terceiros");
  } else if (etapaJogo == "FI") {
    console.log("Etapa do jogo: Final");
  }

  console.log("Categoria: ", categoria);
  console.log(`Quantidade de ingressos: ${quantidade} ingressos`);
  console.log("---Valores---");
  console.log("Valor do ingresso: R$ ", valorIngresso);
  console.log("Valor total: R$ ", valorIngresso * quantidade);
} else if (tipoJogo == "IN") {
  console.log("---Dados da compra---");
  console.log("Nome do cliente: ", nomeCliente);
  console.log("Tipo do jogo: Internacional");

  if (etapaJogo == "SF") {
    console.log("Etapa do jogo: Semi-Final");
  } else if (etapaJogo == "DT") {
    console.log("Etapa do jogo: Decisão de Terceiros");
  } else if (etapaJogo == "FI") {
    console.log("Etapa do jogo: Final");
  }

  console.log("Categoria: ", categoria);
  console.log(`Quantidade de ingressos: ${quantidade} ingressos`);
  console.log("---Valores---");
  console.log("Valor do ingresso: U$ ", valorIngresso * 4.1);
  console.log("Valor total: U$ ", valorIngresso * 4.1 * quantidade);
}
