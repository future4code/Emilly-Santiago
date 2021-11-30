import { connection } from "./connection";
import users from "./users.json";
import products from "./products.json";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `

      CREATE TABLE IF NOT EXISTS labecommerce_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labecommerce_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         image_url TEXT(1023),
         user_id VARCHAR(255),
         price BIGINT,
         FOREIGN KEY(user_id) REFERENCES labecommerce_users(id) 
      );

`
    )
    .then(() => {
      console.log("Tabelas criadas");
    })
    .catch(printError);

const insertUsers = () =>
  connection("labecommerce_users")
    .insert(users)
    .then(() => {
      console.log("Usuários criados");
    })
    .catch(printError);

const insertProducts = () =>
  connection("labecommerce_products")
    .insert(products)
    .then(() => {
      console.log("Receitas criadas");
    })
    .catch(printError);

const closeConnection = () => {
  connection.destroy();
};

createTables().then(insertUsers).then(insertProducts).finally(closeConnection);
