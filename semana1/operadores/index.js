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

// Desafios

let fahrenheit = 0;
let kelvin = 0;
// 1.a)
fahrenheit = 77;
kelvin = (fahrenheit - 32) * (5 / 9) + 273;
console.log(`${kelvin}K`);
// 1.b)
celsius = 80;
fahrenheit = celsius * (9 / 5) + 32;
console.log(`${fahrenheit}°F`);
// 1.c)
celsius = 30;
fahrenheit = celsius * (9 / 5) + 32;
kelvin = (fahrenheit - 32) * (5 / 9) + 273;
console.log(`${fahrenheit}°F e ${kelvin}K`);
// 1.d)
celsius = Number(prompt("Digite o valor de temperatura em celsius"));
fahrenheit = celsius * (9 / 5) + 32;
kelvin = (fahrenheit - 32) * (5 / 9) + 273;
console.log(`${fahrenheit}°F e ${kelvin}K`);

// 2)
const KWH = 0.05;
let consumo = 280;
// 2.a)
valorPago = consumo * KWH;
console.log("Valor a ser pago", valorPago);
// 2.b)
desconto = 0.85;
console.log("Valor a ser pago com desconto", desconto);

// 3.a)
var kg = 0;
var lb = 20;
kg = lb / 0.454;
console.log(`20lb equivalem a ${kg} kg`);
//3.b)
var kg = 0;
var oz = 10.5;
kg = oz * 0.02835;
console.log(`10.5oz equivalem a ${kg} kg`);
//3.c)
var milha = 100;
var metro = 0;
(metro = milha * 1609), 34;
console.log(`100mi equivalem a ${metro} m`);
//3. d)
var ft = 50;
metro = 50 * 0.3048;
console.log(`50ft equivalem a ${metro} m`);
//3. e)
var galao = 103.56;
var litro = galao * 3.785;
console.log(`103.56 equivalem a ${litro}L`);
//3. f)
var xic = 450;
litro = xic * 0.24;
console.log(`450xic equivalem a ${litro}L`);
//3. g)
var xic = Number(prompt("digite o numero de xícaras"));
litro = xic * 0.24;
console.log(`${xic}xic equivalem a ${litro}L`);
