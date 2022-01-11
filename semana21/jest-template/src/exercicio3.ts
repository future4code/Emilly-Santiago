import { Character, validateCharacter } from "./exercicio1";

//a) Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid chacarcter");
  }
  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

// b) Implemente a função utilizando inversão de dependências
export const performAttack2 = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid chacarcter");
  }
  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

// c) Na letra A utilizamos a função validateCharacter atravez do import. Na letra b usamos o método de inversão de dependências para adicionar a função validar na entrada da função performAttack2
