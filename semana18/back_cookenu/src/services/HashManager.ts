import { compareSync, genSaltSync, hashSync } from "bcryptjs";

export class HashManager {
  public async createHash(plainText: string): Promise<string> {

    const rounds = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds);
    const cypherText: string = hashSync(plainText, salt);

    return cypherText;
  }

  public async compareHash(plainText: string, cypherText: string): Promise<boolean> {
    return compareSync(plainText, cypherText);
  };
}
