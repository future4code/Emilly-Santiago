import { DataBase } from "./DataBase";
import users from "./users.json";
import recipes from "./recipes.json";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export class createTables extends DataBase {
  public async createUser(): Promise<any> {
    await DataBase.connection
      .raw(
        `
     CREATE TABLE IF NOT EXISTS cookenu_users (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        email VARCHAR(64) NOT NULL,
        password VARCHAR(255) NOT NULL
     );
  
     CREATE TABLE IF NOT EXISTS cookenu_recipes (
        id VARCHAR(64) PRIMARY KEY,
        title VARCHAR(64) NOT NULL,
        description VARCHAR(1024),
        createAt DATE,
        author_id VARCHAR(64) DEFAULT "No user provided",
        FOREIGN KEY (author_id) REFERENCES cookenu_users(id)
     );
  
     CREATE TABLE IF NOT EXISTS cookenu_relationalUser (
        id VARCHAR(64) PRIMARY KEY,
        user_id VARCHAR(64) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
     );
  `
      )
      .then(() => {
        console.log("Tabelas criadas!");
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

const insertRecipes = () => {
  DataBase.connection("cookenu_recipes")
    .insert(recipes)
    .then(() => {
      console.log("Receitas criadas");
    })
    .catch(printError);
};

const closeConnection = () => {
  DataBase.connection.destroy();
};

const createtable = new createTables();
createtable
  .createUser()
  .then(insertUsers)
  .then(insertRecipes)
  .finally(closeConnection);
