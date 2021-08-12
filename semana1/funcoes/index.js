// Exercicio de interpretação de código

// 1.a) Será impresso 10 e 50 respectivamente
// 1.b) não vai aparecer nada no console

// 2.a) A funçao recebe um texto, transforma para minusculo e retorna um boleano dizendo se a palavra cenoura está contida na frase.
/* 2.b) i - true
       ii - true
      iii - false
*/ 

// Exercício de escrita de código
// 1.a)
function fraseSemEntrada(){
    return console.log(
      "Eu sou Emilly, tenho 32 anos, moro em Recife e sou estudante."
    );
}
// 1.b)
function fraseComEntrada(nome, idade, cidade, profissao) {
    return console.log(
      `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
    );
}

// 2.a)
function somaDoisNum(num1, num2){
    let soma = num1+num2
    return soma
}
console.log(somaDoisNum(2,3))
// 2.b)
function maiorQ(num1, num2){
    return Boolean(num1>=num2)
}
// 2.c)
function numPar(num){
    return !Boolean(num%2)
}
// 2.d)
function tamanhoMensagem(mensagem){
    return console.log(mensagem.length, mensagem.toUpperCase())
}
//3)
function operacoesBasicas(num1,num2) {
    let soma = num1+num2;
    let diferenca = num1-num2;
    let multiplicacao = num1*num2;
    let divisao = num1/num2
    return console.log(soma, diferenca, multiplicacao, divisao)
}

