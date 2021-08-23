///////////////// Exercício de Intrepretação de Código /////////////////

/* 1.a) A função map imprime cada objeto do array (primeiro exemplo: 
{ nome: "Amanda Rangel" , apelido: "Mandi" }) seguido de seu index 
(primeiro exemplo: 0) e todo o array (primeiro exemplo: [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]). */

/* 2.a) Será impresso no console cada nome de cada objeto (primeiro 
exemplo: Amanda Rangel*/

/*  3) Será impresso no console um array de objetos de todos os objetos
que não possuem o apelido igual a Chijo */

///////////////// Exercício de Escrita de Código //////////////////////

//1)
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
//1.a)
const nomeDogs = pets.map((item, index, array) => {
    return array[index].nome
})
console.log(nomeDogs)

//1.b)
const dogsSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(dogsSalsichas)

//1.c)
const descontoPoodles = pets
.filter((item, index, array) => {
    return item.raca == "Poodle"
})
.map((item, index, array) => {
    return texto =`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
}) 
console.log(descontoPoodles)

// 2)
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2.a)
const produtoNome = produtos.map((item) => {
    return item.nome
})
console.log(produtoNome)

//2.b)

/*função do site MDN apenas para arredondar para duas casas decimais
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/
function decimalAdjust(type, value, exp) {
		// Se exp é indefinido ou zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// Se o valor não é um número ou o exp não é inteiro...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Transformando para string
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Transformando de volta
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Arredondamento decimal
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}

const produtoComDesconto = produtos.map((item) => {
    return item.preco = Math.round10((item.preco/100)*95, -2)
})
console.log(produtoComDesconto)

//2.c)
const produtoBebidas = produtos.filter(item => {
    return item.categoria === "Bebidas"
})
console.log(produtoBebidas)

//2.d) 
const produtosYpe = produtos.filter(produto => {
    return produto.nome.includes("Ypê")
})
console.log(produtosYpe)

//2.e)
const produtosFrases = produtos
.filter(produto => {
    return produto.nome.includes("Ypê")
})
.map(produto => {
    return frase = `Compre ${produto.nome} por ${produto.preco}`
})
console.log(produtosFrases)

/////////////////////// /Desafios //////////////////////////

//1)

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

// 1.a)
const pokemonsOrdem = pokemons.map(pokemon => {
    return pokemon.nome
}).sort()
console.log(pokemonsOrdem)

// 1.b)
// O código não funciona como deveria :(
const semRepetidos = pokemons.filter(function(el, i) {
    return pokemons.indexOf(el.tipo) === i; // -1 === 1
    // o indexOf deveria retornar o index do primeiro elemento
});
console.log(semRepetidos);