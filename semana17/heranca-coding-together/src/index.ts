import { getMaxListeners } from "process";
import app from "./app";
import { BaseDatabase } from "./data/BaseDatabase";
import { CharacterDatabase } from "./data/CharacterDatabase";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacters";
import {
  
  User,
  Customer,
  Client,
  Residence,
  ResidentialClient,
} from "./types";

// endpoint para teste
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/character", getAllCharacters);
app.post("/character", createCharacter);
app.delete("/character/:id", deleteCharacter);

// exemplo de polimorfismo
export function testDatabase(database: BaseDatabase) {
  console.log(database.getHost());
}

const cdb = new CharacterDatabase();

testDatabase(cdb);


// Aula 53 - HERANÇA E POLIMORFISMO

// HERANÇA /////////////////////////////////////////////////////////////////

// Exercício 1
// a) Não. Sem criar o metodo get para o password eu não tenho acesso a ela.
// b) Apenas uma usando o código abaixo:
const Emilly: User = new User(
  "1",
  "emillysantiago@gmail.com",
  "Emilly",
  "123456"
);

// Exercício 2
//a) Apenas uma vez
//b) Apenas uma vez
const Isabella: Customer = new Customer(
  "1",
  "isabellaNunes@gmail.com",
  "Isabella",
  "123456",
  "123456789"
);

//Exercicio 3
console.log(Isabella.getId());
console.log(Isabella.getEmail());
console.log(Isabella.getName());
console.log(Isabella.purchaseTotal);
console.log(Isabella.getCreditCard());
//a) Não é possivel ter acesso a senha sem criar um construtor

//Exercício 4
console.log(Isabella.interoduceYourself()); //Olá, bom dia!

//Exercício 5
console.log(Isabella.interoduceYourself()); //Olá, sou Isabella. Bom dia!

// POLIMORFISMO  ////////////////////////////////////////////////////////////

const Joao: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
console.log(Joao);

console.log(Joao.name);
console.log(Joao.registrationNumber);
console.log(Joao.consumedEnergy);
console.log(Joao.calculateBill());
//a) Se eu imprimir o cliente sem declarar suas propriedades e métodos eu não consigo acessar o método, ele imprime: [Function: calculateBill].

// Exercício 2
//const minhaCasa: Place = new Place("50720000")
//a) "Cannot create from a abstract Class." Não posso criar de uma classe abstrata.
//b) 
const Residence1: Residence = new Residence(5, "50720000");

// Exercício 3
//3.1) Precisamos criar uma classe que extende da classe abstrata. Depois é só instanciar.
//3.2) Porque não posso herdar interfaces.
//3.3) Porque é uma classe que usada para abstrair lugares que podem ser residenciais, comerciais e industriais.

// Exercício 4
const Home = new ResidentialClient("Maria", 3, 40, "MeuCEP", 4, "MeuCPF");
// a) Possui propriedades tanto da Residence e da Client:

//Exercício 5
//a) Parece com a ResidentialClient pq CommercialClient herda também as propriedades do Client.
//b) A diferença é que CommercialClient também herda Commerce (cnpj) que o ResidentialClient não herda.

//Exercício 6
//a) Deve ser filha de Industry. Porque o cliente é Industrial. 
//b) Implementa a interface Client. Porque o indivíduo é um cliente tbm.
//c) Porque eu não quero que eu usuário possa alterar as informações do cliente.
