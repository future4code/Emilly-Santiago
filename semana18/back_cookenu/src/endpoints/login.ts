import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(422)
        .send("Insira todas as informações de 'email' e 'password'");
    }
    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Esse email não já esta cadastrado!");
    }
    const hashManager = new HashManager();
    const passwordCorrect = hashManager.compareHash(
      password,
      user.getPassword()
    );

    if (!passwordCorrect) {
      res.status(401).send("Email ou senha incorreta");
    }
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.getId() });

    res.status(200).send({ message: "Usuário logado com sucesso!", token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
