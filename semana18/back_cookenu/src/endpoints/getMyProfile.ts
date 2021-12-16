import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";

export async function getMyProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(422).send("Esse endpoint exige uma autorização no headers.");
    }

    const authenticatior = new Authenticator();
    const tokenData = authenticatior.getTokenData(token);

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserById(tokenData.id);

    if (!user) {
      res.status(409).send("Token invalido");
    }
    const userInfo = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail()
    }
    res.status(200).send(userInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
