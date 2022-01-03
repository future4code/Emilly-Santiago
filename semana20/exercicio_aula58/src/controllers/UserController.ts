import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { userInput, login } from "../types/user";

export class UserController {
  signUpController = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
      const userInput: userInput = {
        email,
        name,
        password,
        role,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.signUpBusiness(userInput);
      res.status(201).send(token);
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  loginController = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const userInput: login = {
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.loginBusiness(userInput);
      res.status(201).send(token);
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  getAllUsersController = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const userBusiness = new UserBusiness();
      const users = await userBusiness.getAllUsers_Business(token);
      res.send(users).status(200);
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage);
    }
  };

  deleteUserById_Controller = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.params.id,
        token: req.headers.authorization!,
      };
      const userBusiness = new UserBusiness();
      await userBusiness.deleteUserById_Business(input);

      res.status(200).send({ message: "Usuário apagado com sucesso" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
