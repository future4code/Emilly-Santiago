import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";


export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)

// ta dando erro no cadastro
app.post("/users", createUser);

app.get("/products", getAllProducts);


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})