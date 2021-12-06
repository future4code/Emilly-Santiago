import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import { getAddressInfo } from './services/getAdressInfo'
// import passRecovery from './endpoints/passRecovery'
// import { getAddressInfo } from './services/getAddressInfo'
// import { mailTransporter } from './services/mailTransporter'

dotenv.config()


// Exercicio 1
getAddressInfo("05424150").then(console.log)

// Exercício 2
// A Tabela de endereço foi criada. Confira abrindo o arquivo migrations.ts e confira a declaração.

// Exercicio 3
// Erro na chamada da função de criar usuário e endereço 
//app.post("/users/signup", createUser("05424150", 450, "blablavla"));
