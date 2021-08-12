/* Exercícios de interpretação de código */


// 1) Será impresso: 10 e 10 5 respectivamente

// 2) Será impresso: 10 10 10
 
// 3) p = horasPorDia, t = salarioPorDia


/* Exercício de escrita de código */

// 1ª Questão
var nome
var idade
console.log(typeof(nome)) // foi impresso undefined pq os tipos não foram atribuidos
console.log(typeof(idade)) // foi impresso undefined pq os tipos não foram atribuidos
nome = prompt("Qual o seu nome?")
idade = Number(prompt("Qual a sua idade?"))
console.log(typeof(nome)) //String
console.log(typeof(idade)) //Number
console.log("Olá", nome, "você tem", idade, "anos.")

// 2ª Questão
var resposta1 = prompt("Você ja esteve em Recife?")
var resposta2 = prompt("Você gosta de Low-fi")
var resposta3 = prompt("Você ja assistiu The Midnight Gospel nas Netflix?")

console.log("Você ja esteve em Recife? - ", resposta1.toUpperCase())
console.log("Você gosta de Low-fi? - ", resposta2.toUpperCase())
console.log("Você ja assistiu The Midnight Gospel nas Netflix? -", resposta3.toUpperCase())

// 3ª Questão
let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
var c = a
a=b
b=c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio

let primeiroNumero = Number(prompt("Digite o primeiro número"))
let segundoNumero = Number(prompt("Digite o segundo número"))

console.log("1. O primeiro número somado ao segundo número resulta em:", primeiroNumero+segundoNumero)
console.log("2. O primeir número multiplicado pelo segundo número resulta em:", primeiroNumero*segundoNumero)