import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./data";
import { User } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

// Exercicio1 - Buscar todos os usuários
app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result: User[] | undefined = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      age: user.age,
    }));

    if (!result) {
      errorCode = 404;
      throw new Error("Users not found");
    }
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

// Exercicio 2 e 3 - Buscar por nome e por type
app.get("users/search", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    let result: User[] = users;

    if (req.query.name) {
      result = result.filter((user) =>
        user.name.includes(req.query.name as string)
      );
    }

    if (req.query.type) {
      result = result.filter((user) =>
        user.type.includes(req.query.type as string)
      );
    }

    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

// Exercicio 4 - Adicionando novo usuário
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please fill all fields");
    }
    const newUser: User = {
      id,
      name,
      email,
      type,
      age,
    };
    users.push(newUser)
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

// Encontrar usuário pelo Id
app.get("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      errorCode = 422;
      throw new Error("Invalid id");
    }

    const user: User | undefined = users.find((user) => {
      return user.id === id;
    });
    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
