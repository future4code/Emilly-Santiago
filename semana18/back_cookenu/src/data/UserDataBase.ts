import { DataBase } from "./DataBase";
import { User } from "../entities/User";

export class UserDataBase extends DataBase {
  public async createUser(user: User): Promise<void> {
    try {
      await DataBase.connection("cookenu_users").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await DataBase.connection("cookenu_users")
        .select("*")
        .where({ email: email });

      return user[0] && User.toUserModel(user[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }

  public async findUserById(id: string): Promise<User> {
    try {
      const user = await DataBase.connection("cookenu_users")
        .select("*")
        .where({ id: id });

      return user[0] && User.toUserModel(user[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }
}
