import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";

export async function getUserProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;

    if (!token || !id) {
      res
        .status(422)
        .send("Esse endpoint exige uma autorização no headers e id no params.");
      console.log(token, id);
    }

    const authenticatior = new Authenticator();
    const tokenData = authenticatior.getTokenData(token);

    const userDataBase = new UserDataBase();
    const userLogged = await userDataBase.findUserById(tokenData.id);

    if (!userLogged) {
      res.status(409).send("Token invalido. Usuário não identificado");
    }

    const userFound = await userDataBase.findUserById(id);

    const userFoundInfo = {
      id: userFound.getId(),
      name: userFound.getName(),
      email: userFound.getEmail(),
    };

    res.status(200).send(userFoundInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
