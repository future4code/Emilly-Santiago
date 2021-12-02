// Exercício1
// a)
var minhaString: string = "Bel";

// b)
var meuNumero: number = 2;

// c)
enum Cores {
  VERMELHO = "Vermelho",
  AMARELO = "Amarelo",
  BRANCO = "Branco",
  AZUL = "Azul",
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: Cores;
};

const Isabella: pessoa = {
  nome: "Isabella Nunes",
  idade: 27,
  corFavorita: Cores.AZUL,
};

const Renata: pessoa = {
  nome: "Renata Nunes",
  idade: 45,
  corFavorita: Cores.AMARELO,
};

const Jorge: pessoa = {
  nome: "Jorge Santiago",
  idade: 65,
  corFavorita: Cores.BRANCO,
};
