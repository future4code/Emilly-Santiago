import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error(" 'name', 'email' e 'password' são obrigatórios");
    }

    if (password.length < 6) {
      res.statusCode = 422;
      throw new Error("A senha deve conter no mínimo seis caracteres");
    }

    if (!email.includes("@")) {
      res.statusCode = 422;
      throw new Error("Formato de email inválido");
    }

    await connection("labecommerce_users").insert({
      id: Date.now().toString(),
      name,
      email,
      password,
    });
    res.send("Usuário criado")
  } catch (error) {
    console.log(error)
    if (res.statusCode === 200)
      res.status(500).send("Um erro inesperado ocorreu =/");
    else res.send(error);
  }
};

