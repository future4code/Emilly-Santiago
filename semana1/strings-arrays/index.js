// Exercício de interpretação de código
/* 1)
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

// 2) SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercício de escrita de código
//1)
let emailDoUsuario = prompt("Digite seu email");
let nomeDoUsuario = prompt("Digite seu nome");
console.log(
  `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
);

//2)
const MCF = ["sushi", "feijao", "cuscuz", "bolo de chocolate"];
//2.a)
console.log("Essas são as minhas comidas preferidas: ", MCF);
//2.b)
let comidaPreferida = prompt("Digite o nome de sua comida preferida");
MCF.splice(1, 1, comidaPreferida);
console.log(MCF);

//3)
//3.a)
let listaDeTarefas = [];
//3.b)
listaDeTarefas[0] = prompt("Digite a primeira tarefa");
listaDeTarefas[1] = prompt("Digite a segunda tarefa");
listaDeTarefas[2] = prompt("Digite a terceira tarefa");
//3.c)
console.log(listaDeTarefas);
//3.d)
let tarefaRealizada = Number(
  prompt("Digite uma tarefa que você ja realizou: 0,1 ou 2")
);
//3.e)
listaDeTarefas.splice(tarefaRealizada, 1);
//3.f)
console.log(listaDeTarefas);

// Desafios
//1)
let frase = prompt("Digite uma frase");
console.log("O Array formado a partir da frase é: ", frase.split(" "));

//2)
const Array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let indexAbacaxi = Array.indexOf("Abacaxi");
console.log("O indice do Abacaxi no Array é: ", indexAbacaxi);
console.log("O tamanho do Array é: ", Array.length);
