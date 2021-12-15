import { connection } from "./connection";

connection
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
      description VARCHAR(1024) DEFAULT "No description provided",
      createAt DATE,
      author_id VARCHAR(64),
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
  .catch((error) => {
    console.log(error.sqlMessage || error.message);
  })
  .finally(() => {
    connection.destroy();
  });

