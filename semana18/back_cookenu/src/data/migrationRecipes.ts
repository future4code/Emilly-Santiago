import { DataBase } from "./DataBase";
import users from "./users.json";
import recipes from "./recipes.json";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export class CreateTables extends DataBase {
  
  public async createTableRecipes(): Promise<any> {
    await DataBase.connection
      .raw(
        `
     CREATE TABLE IF NOT EXISTS cookenu_recipes (
        id VARCHAR(64) PRIMARY KEY,
        title VARCHAR(64) NOT NULL,
        description VARCHAR(1024),
        createAt DATE,
        authorId VARCHAR(64),
		    FOREIGN KEY (authorId) REFERENCES cookenu_users(id)
     );
  `
      )
      .then(() => {
        console.log("Tabela de receitas criadas!");
      })
      .catch((error: any) => {
        console.log(printError);
      });
  }
}

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


const createTableRecipes = new CreateTables();
createTableRecipes
  .createTableRecipes()
  .then(insertRecipes)
  .finally(closeConnection);
