// Exercício de interpretação de código 

    /* 1) 
    a. false
    b. false
    c. true
    d. boolean
    */

    /* 2)
    O problema é que esse código não está somando os numeros e sim strings
    Será impresso no console uma soma de strings: primeiroNumerosegundoNumero
    */

    /* 3)
    Ele deveria transformar em Number antes de somar:
    let primeiroNumero = Number(prompt("Digite um umero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))
    */

// Exercício de escrita de código
// 1)
var idadeUsuario = Number(prompt("Digite sua idade"))
var idadeAmigo = Number(prompt("Digite a idade de seu amigo u de sua amiga"))

console.log("Sua idade é maior que a do seu amigo?", idadeUsuario>idadeAmigo)

// 2)
var numeroPar = Number(prompt("Digite um numero par"))
console.log(numeroPar%2)
// sempre que o numero é ar o resto da divsão por 2 é zero
// Se o usuario digitar um numero ímpar o console imprime um numero maior que zero

// 3)
var AnoDeNascimento = Number(prompt("Digite o ano que você nasceu"))
var idade = 2021 - AnoDeNascimento
var Meses = idade*12
var dias = idade*365
var horas = idade*365*24 
console.log("a.", Meses)
console.log("b.", dias)
console.log("c.", horas)

// 4)
var numero1 = Number(prompt("Digite o primeiro numero"))
var numero2 = Number(prompt("Digite o segundo numero"))

console.log("O primeiro numero é maior que segundo?", numero1>numero2)
console.log("O primeiro numero é igual ao segundo?", numero1==numero2)
console.log("O primeiro numero é divisível pelo segundo?", !Boolean(numero1%numero2));
console.log("O segundo numero é divisível pelo primeiro?", !Boolean(numero2%numero1))