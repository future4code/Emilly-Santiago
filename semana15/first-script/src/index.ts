console.log("Hello World!");

enum MarcasDeCarro {
  VOLKSWAGEM = "Volkswagem",
  FORD = "Ford",
  FIAT = "Fiat",
}

type Carro = {
  marca: MarcasDeCarro;
  VolumeDoTanque: Number;
  temMotorFlex: boolean;
  calculaAutonomia: (tanque: number) => number;
};

const calculaAutonomia = (tanque: number) => {
  return tanque * 15;
};

const mustang: Carro = {
  marca: MarcasDeCarro.FORD,
  VolumeDoTanque: 63,
  temMotorFlex: false,
  calculaAutonomia,
};

const gol: Carro = {
  marca: MarcasDeCarro.VOLKSWAGEM,
  VolumeDoTanque: 55,
  temMotorFlex: true,
  calculaAutonomia,
};

const automoveis: Carro[] = [];
automoveis.push(mustang);
automoveis.push(gol);

function buscarCarrosPorMarca(frota: Carro[], marca?: string): Carro[] {
  if (marca === undefined) {
    return frota;
  }
  return frota.filter((carro) => {
    return carro.marca === marca;
  });
}

console.log("-------------------------------");
console.log(buscarCarrosPorMarca(automoveis));
console.log("-------------------------------");
console.log(buscarCarrosPorMarca(automoveis, "Ford"));
console.log("-------------------------------");
