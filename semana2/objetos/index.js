// Exercício de Interpretação de código

/* 
1.a)
Matheus Nachtergaele
Virginia Cavendish
{canal: "Globo", horario: "14h"}
*/

/*
2.a)
{nome: "Juca", 	idade: 3, raca: "SRD"}
{nome: "Juba", 	idade: 3, raca: "SRD"}
{nome: "Jubo", 	idade: 3, raca: "SRD"}
*/

/*
3.a)
false
Undefined
b) A função recebe o objeto pessoa e procurar a sua propriedade. 
Como backender é uma propriedade que existe, a funçao retorna o valor dessa propriedade (neste caso: false).
Quando a funcão recebe a propriedade altura, como altura não existe, retorna undefined.
*/

// Exercício de escrita de código
//  1.a)
function imprimirNomes(obj) {
  const frase = `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`;
  return frase;
}

const pessoa = {
  nome: "Luna",
  apelidos: ["Naninha", "Mandinha", "Mandi"],
};

console.log(imprimirNomes(pessoa));

// 1.b)
const pessoaNovo = {
  nome: "Luna",
  apelidos: ["Popoco", "Lucicleide", "Luci"],
};

console.log(imprimirNomes(pessoaNovo));

// 2.a)

const people1 = {
  nome: "Luna",
  idade: 33,
  profissao: "padeira",
};

const people2 = {
  nome: "Emilly",
  idade: 32,
  profissao: "estudante",
};

//2.b)
function imprimirObjetos(obj1, obj2) {
  let array1 = [];
  array1[0] = obj1.nome;
  array1[1] = obj1.nome.length;
  array1[2] = obj1.idade;
  array1[3] = obj1.profissao;
  array1[4] = obj1.profissao.length;

  let array2 = [];
  array2[0] = obj2.nome;
  array2[1] = obj2.nome.length;
  array2[2] = obj2.idade;
  array2[3] = obj2.profissao;
  array2[4] = obj2.profissao.length;

  return console.log(array1, array2);
}

imprimirObjetos(people1, people2);

//3.a)
var carrinho = [];

//3.b)
const fruta1 = {
  nome: "banana",
  disponibilidade: true,
};

const fruta2 = {
  nome: "abacate",
  disponibilidade: true,
};

const fruta3 = {
  nome: "mirtilo",
  disponibilidade: true,
};

//3.c)
function adicionarFruta(obj, array) {
  array.push(obj);
  return array;
}

//3.d)
adicionarFruta(fruta1, carrinho);
adicionarFruta(fruta2, carrinho);
adicionarFruta(fruta3, carrinho);

console.log(carrinho);
