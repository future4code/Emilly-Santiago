// Exercicio5

type Dados = {
  soma: number;
  subtracao: number;
  multiplicacao: number;
  maior: number
};

function obterParametros(num1: number, num2: number): Dados {
    let numeroMaior: number = 0;

    if(num1>num2) {
       numeroMaior = num1 
    } else {
        numeroMaior = num2
    }

    const dados : Dados = {
        soma: num1 + num2,
        subtracao: num1 - num2,
        multiplicacao: num1 * num2,
        maior: numeroMaior
    }
    
    return dados;
}