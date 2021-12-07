import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";
import { User } from "../types";


export const createPurchase = async (req: Request, res: Response) => {
  try {
    const { product_id, user_id, quantity } = req.body;

    if (!product_id || !product_id || !quantity) {
      res.statusCode = 422;
      throw new Error(" 'name', 'price' e 'image_url' são obrigatórios");
    }

    const [user]: User[] = await connection("labecommerce_users")
      .select()
      .where({ id: user_id });

    if(!user) {
      throw new Error("Usuário não encontrado(user_id)")
    }

    const [product]: Product[] = await connection("labecommerce_products")
      .select()
      .where({ id: product_id });

    let total_price: number = 0;
    if (product) {
      total_price = product.price * quantity;
    } else {
      throw new Error("Produto não encontrado(product_id");
    }

    await connection("labecommerce_purchases").insert({
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price,
    });

    res.send("Compra realizada com sucesso!");
    
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200)
      res.status(500).send("Um erro inesperado ocorreu =/");
    else res.send(error);
  }
};
