// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura"));
  let largura = Number(prompt("Digite a largura"));
  return console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtul = Number(prompt("Digite o ano atual"));
  let anoNascimento = Number(prompt("Digie o ano de seu nascimento"));
  let idade = anoAtul - anoNascimento;
  return console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura);
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome");
  let idade = prompt("Digite sua idade");
  let email = prompt("Digite seu email");
  return console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let arrayCores = [];
  let cor1 = prompt("Digite sua primeira cor favorita");
  arrayCores.push(cor1);
  let cor2 = prompt("Digite sua segunda cor favorita");
  arrayCores.push(cor2);
  let cor3 = prompt("Digite sua terceira cor favorita");
  arrayCores.push(cor3);
  return console.log(arrayCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return Boolean(string1.length === string2.length);
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let x = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = x;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() == string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual"));
  let anoNascimento = Number(prompt("Digite o ano de nascimento"));
  let anoCarteira = Number(
    prompt("Digite o ano que carteira de identidade foi emitida")
  );

  let idadePessoa = anoAtual - anoNascimento;
  let idadeCarteira = anoAtual - anoCarteira;
  let renovar = false;

  if (idadePessoa <= 20 && idadeCarteira >= 5) {
    renovar = true;
  }
  if (idadePessoa > 20 && idadePessoa <= 50 && idadeCarteira >= 10) {
    renovar = true;
  }
  if (idadePessoa > 50 && idadeCarteira >= 15) {
    renovar = true;
  }
  return console.log(renovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  var bissextos = false;
  if (ano % 400 === 0) {
    bissextos = true;
  }
  if (ano % 4 === 0) {
    bissextos = true;

    if (ano % 100 === 0 && ano % 400 !== 0) {
      bissextos = false;
    }
  }
  return bissextos;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  var resposta1 = prompt("Você tem mais de 18 anos?");
  if (resposta1.toUpperCase() === "SIM") {
    var resposta1Boleano = true;
  }
  var resposta2 = prompt("Você possui ensino médio completo?");
  if (resposta2.toUpperCase() === "SIM") {
    var resposta2Boleano = true;
  }
  var resposta3 = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );
  if (resposta3.toUpperCase() === "SIM") {
    var resposta3Boleano = true;
  }

  if (resposta1Boleano && resposta2Boleano && resposta3Boleano) {
    var inscricao = true;
  } else {
    inscricao = false;
  }
  return console.log(inscricao);
}
