////////////////// Exercício de interpretação de código/////////////////

/* 1) O codigo soma o valor do incremento i a variavel valor. A variável valor armazena o valor do index anterior até o index 5. 
Dessa forma somando os numeros de 0 à 4 encontramos 10. Logo, dez será impresso no console do navegador
*/

// 2.a) O código irá imprimir todos os numeros dentro da matriz que são maiores que 18
// 2.b) A melhor forma de acessar o indice do array é utilizando o for normal

// 3) O código recebe um nuer digitado pelo usuário e cria um loop. A cada interação ee imprime asteristicos até chegar no numero digitado.

/////////////// Exercício de escrita de código//////////////////////////
// 1)
let qtdBichos = Number(
  prompt("Digite a quantidade de bichinhos de estimção que você tem")
);

if (qtdBichos == 0) {
  console.log("Que pena! Você pode adotar um pet!");
}
if (qtdBichos > 0) {
  var nomes = [];
  for (let i = 0; i < qtdBichos; i++) {
    nomes[i] = prompt("Digite o nome do seu bichinho");
  }
}
console.log(nomes);

//2.a)
//const array = [111, 12, 56, 78];
function imprime(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//imprime(array);
//2.b)
function divide10(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] / 10);
  }
}
//divide10(array);
//2.c)
function numPar(arr) {
  var novoArr = [];
  for (elem of arr) {
    if (elem % 2 == 0) {
      novoArr.push(elem);
    }
  }
  return console.log(novoArr);
}
//numPar(array);
//2.d)
function arrayStrings(arr) {
  var novoArr = [];
  for (let i = 0; i < arr.length; i++) {
    novoArr[i] = `O elemento do index ${i} é: ${arr[i]}`;
  }
  return console.log(novoArr);
}
//arrayStrings(array);
// 2.e)
function imprimeExtremos(arr) {
  let maior = 0;
  let menor = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  return console.log(`O maior número é ${maior} e o menor é ${menor}`);
}
//imprimeExtremos(array);
