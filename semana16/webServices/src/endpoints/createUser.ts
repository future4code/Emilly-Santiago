import { Request, Response } from "express";
import { connection } from "../data/connection";
// import { mailTransporter } from "../services/mailTransporter";
import { adress, user } from "../types";
import axios from "axios";


export default async function createUser(
  req: Request,
  res: Response,
  cep: string,
  numero: number,
  complemento?: string
): Promise<void> {
  try {
    const { name, nickname, email, address } = req.body;

    if (!name || !nickname || !email || !address || cep || numero) {
      res.statusCode = 422;
      throw "'name', 'nickname', 'email', 'address' 'cep' e 'numero' são obrigatórios";
    }

    const id: string = Date.now().toString();
    const response = await axios.get(`ttps://viacep.com.br/ws/${cep}/json/`);

    const newUser: user = { id, name, nickname, email, address };
    const newAdress: adress = {
      cep: response.data.cep || cep,
      logradouro: response.data.logradouro,
      numero: numero,
      complemento: complemento,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      estado: response.data.uf
    };

    await connection("aula51_users").insert(newUser);
    await connection("aula51_Adress").insert(newAdress);

    res.status(201).send("Usuário e endereço criado!");
  } catch (error: any) {
    if (typeof error === "string") {
      res.send(error);
    } else {
      console.log(error.sqlMessage || error.message);
      res.status(500).send("Ops! Um erro inesperado ocorreu =/");
    }
  }
}
