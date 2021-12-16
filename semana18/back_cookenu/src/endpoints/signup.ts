import {Request, Response} from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerated } from "../services/IdGenerated";

export async function signup(req:Request, res: Response) {
    try{
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(422).send("Insira todas as informações de 'name', 'email' e 'password'")
        }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.findUserByEmail(email)

        if(user) {
            res.status(409).send('Esse email já esta cadastrado!')
        }

        const IdGenerator = new IdGenerated()
        const id = IdGenerator.generatedId()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.createHash(password)

        const Newuser = new User(id, name, email, hashPassword);
        await userDataBase.createUser(Newuser);

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id})
        res.status(200).send({message: 'Usuário criado com sucesso!', token})
    } catch(error) {
        res.status(400).send(error.message)
    }
}