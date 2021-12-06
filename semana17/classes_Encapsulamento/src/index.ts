import app from "./app";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacters";
import { UserAccount } from "./types";

app.get("/character", getAllCharacters);
app.post("/character", createCharacter);
app.delete("/character/:id", deleteCharacter);

// Exercício 1
// a) O construtor dentro da classe serva para que possamos ter acesso aos atriutos e métodos da classe. Assim podemos atribuir valores e funções para a classe UserAccount

// b) Foi impresa apenas 1 vez
const user1 = new UserAccount("01362973408", "Emilly", 32);

// c) Temos que implementar os métodos getters e setters

//Exercicio 2 e 3
//  Esta demontrado dentro de types.ts
