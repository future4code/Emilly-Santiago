import knex, { Knex } from "knex";
import { Character } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CharacterDatabase extends BaseDatabase {

  async create(character: Character) {

    await BaseDatabase.connection("character")
      .insert({
        name: character.getName(),
        gender: character.getGender(),
        description: character.getDescription()
      })
  }

  async getAll(): Promise<Character[]> {
    const characters = await CharacterDatabase.connection("character").select();
    const charactersClass: Character[] = [];
    for (let ch of characters) {
      const c = new Character(ch.name, ch.gender, ch.id, ch.description);
      charactersClass.push(c);
    }

    return charactersClass;
  }

  async delete(id: string): Promise<void> {
    await BaseDatabase.connection("character")
      .delete()
      .where({ id })
  }
}