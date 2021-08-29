// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let numbersAsc = array.sort(function (a, b) {
    return a - b;
  });
  return numbersAsc;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((elem) => elem % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let newArray = array
    .filter((elem) => {
      return elem % 2 === 0;
    })
    .map((elem) => {
      return elem * elem;
    });
  return newArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNum = Math.max(num1, num2);
  let menorNum = Math.min(num1, num2);
  let diferenca = Math.abs(num1 - num2);
  let divisivel = maiorNum % menorNum === 0;

  return {
    maiorNumero: maiorNum,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferenca,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = [];
  let i = 0;

  while (array.length <= n - 1) {
    if (i % 2 === 0) {
      array.push(i);
    }
    i++;
  }
  return array;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let tipoTriangulo = "";

  if (ladoA == ladoB && ladoA == ladoC) {
    tipoTriangulo = "Equilátero";
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    tipoTriangulo = "Isósceles";
  } else {
    tipoTriangulo = "Escaleno";
  }
  return tipoTriangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let numMaior = array.reduce(function (a, b) {
    return Math.max(a, b);
  });

  let numMenor = array.reduce(function (a, b) {
    return Math.min(a, b);
  });

  let arrayfiltrado = array.filter((elem) => {
    return elem !== numMaior && elem !== numMenor;
  });

  let segMaior = arrayfiltrado.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let segMenor = arrayfiltrado.reduce(function (a, b) {
    return Math.min(a, b);
  });

  const resposta = [segMaior, segMenor];
  return resposta;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let newObject = { ...pessoa, nome: "ANÔNIMO" };
  return newObject;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let apenasAutorizads = pessoas.filter((pessoa, index, array) => {
    return pessoa.idade >= 15 && pessoa.idade < 60 && pessoa.altura >= 1.5;
  });
  return apenasAutorizads;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let apenasNaoAutorizads = pessoas.filter((pessoa, index, array) => {
    return pessoa.idade < 15 || pessoa.idade >= 60 || pessoa.altura < 1.5;
  });
  return apenasNaoAutorizads;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const soma = (a, b) => a + b;

  contas.map((conta) => {
    if (conta.compras.length !== 0) {
      conta.saldoTotal -= conta.compras.reduce(soma);
      conta.compras = [];
    }
  });
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
  return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort(function (a, b) {
    return a.dataDaConsulta.getTime() - b.dataDaConsulta.getTime();
  });
  return consultas;
}
