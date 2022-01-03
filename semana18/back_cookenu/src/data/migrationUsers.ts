import { DataBase } from "./DataBase";
import users from "./users.json";
import recipes from "./recipes.json";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export class CreateTables extends DataBase {
  public async createTableUsers(): Promise<any> {
    await DataBase.connection
      .raw(
        `
     CREATE TABLE IF NOT EXISTS cookenu_users (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        email VARCHAR(64) NOT NULL,
        password VARCHAR(255) NOT NULL
     );
     CREATE TABLE IF NOT EXISTS cookenu_relationalUser (
        id VARCHAR(64) PRIMARY KEY,
        userId VARCHAR(64) NOT NULL,
        FOREIGN KEY (userId) REFERENCES cookenu_users(id)
     );
  `
      )
      .then(() => {
        console.log("Tabelas de usuários criadas!");
      })
      .catch((error: any) => {
        console.log(printError);
      });
  }
}

const insertUsers = () => {
  DataBase.connection("cookenu_users")
    .insert(users)
    .then(() => {
      console.log("Usuários criados");
    })
    .catch(printError);
};

const closeConnection = () => {
  DataBase.connection.destroy();
};

const createTableUsers = new CreateTables();
createTableUsers.createTableUsers().then(insertUsers).finally(closeConnection);

