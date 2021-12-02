// a) A entrada da funçao é numeros e a saida é estatisticas

type amostraDeIdades = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => Estatistica;
};

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): Estatistica {
  const numerosOrdenados = numeros.sort((a: number, b: number) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas : Estatistica = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// b) As outras variaveis são: o array de numerosOrdenados, a soma de todos os numeros (soma) e um objeto chamado estatistica que tem o maior e menor numero e a media.

const idades: amostraDeIdades = {
  numeros: [12, 24, 56, 87, 44, 21],
  obterEstatisticas
};

console.log(idades)
console.log(obterEstatisticas(idades.numeros))