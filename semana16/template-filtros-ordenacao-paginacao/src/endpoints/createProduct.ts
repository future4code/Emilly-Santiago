import { Request, Response } from "express";
import { connection } from "../data/connection";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      res.statusCode = 422;
      throw new Error(" 'name', 'price' e 'image_url' são obrigatórios");
    }

      await connection("labecommerce_products").insert({
      id: Date.now().toString(),
      name,
      price,
      image_url,
    });
    res.send("Produto criado")
  } catch (error) {
    console.log(error)
    if (res.statusCode === 200)
      res.status(500).send("Um erro inesperado ocorreu =/");
    else res.send(error);
  }
};

