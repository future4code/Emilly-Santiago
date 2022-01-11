// 4)
// a) A validateCharacter pq ela é a dependencia que esta dentro da função performAttack

import { Character } from "../src/exercicio1";
import { performAttack2 } from "../src/exercicio3";

// b) Crie um Mock dessa função que represente a saída de sucesso do seu comportamento
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });
});

//c) Crie um Mock dessa função que representa a saída de erro/falha do seu comportamento
test("Creating Mocks", () => {
  const validatorMock = jest.fn(() => {
    return false;
  });
});

// 5)
//a) Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.
test("Should perform attack", () => {
  const validatorMock = jest.fn(() => {
    return true;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  performAttack2(attacker, defender, validatorMock as any);

  expect(defender.life).toEqual(1300);
  expect(validatorMock).toHaveBeenCalled();
  expect(validatorMock).toHaveBeenCalledTimes(2);
  expect(validatorMock).toHaveReturnedTimes(2);
});

// b) Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida. Verifique o estado final das personagens. Sobre a função mockada, verifique se ela foi chamada, o número de vezes em que ela foi chamada, quantas vezes ela retornou.

test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack2(attacker, defender, validatorMock as any);
  } catch (err) {
    expect(err.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});
