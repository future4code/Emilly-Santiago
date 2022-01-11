import { validateCharacter } from "../src/exercicio1";

// a) Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".
test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});

// b) Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero.
test("Should return false for life iqual to zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 0,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});

// c) Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.
test("Should return false for strength iqual to zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 0,
    defense: 500,
  });
  expect(result).toBe(false);
});

// d) Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.
test("Should return false for strength iqual to zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 0,
  });
  expect(result).toBe(false);
});

// e) Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
test("Should return false for strength iqual to zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: -1,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(false);
});

// f) Crie um teste que verifique o comportamento da função com um personagem com as informações validas
test("Should return false for strength iqual to zero", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 500,
  });
  expect(result).toBe(true);
});

