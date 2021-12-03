import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { createUser } from "./endpoints/createUser"
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { createProduct } from "./endpoints/createProduct";
import { createPurchase } from "./endpoints/createPurchase";


export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)
app.post("/users", createUser);

app.get("/products", getAllProducts);
app.post("/products", createProduct);

app.post("/purchases", createPurchase);


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})