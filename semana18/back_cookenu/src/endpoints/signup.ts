import {Request, Response} from "express";
import { IdGenerated } from "../services/IdGenerated";

export async function signup(req:Request, res: Response) {
    try{
        const {name, password, email} = req.body

        if (!name || !email || !password) {
            res.status(422).send("Insira todas as informações de 'name', 'email' e 'password'")
        }
        const IdGenerator = new IdGenerated()
        const id = IdGenerator.generatedId()
    } catch(error) {
        res.status(400).send(error.message)
    }
}