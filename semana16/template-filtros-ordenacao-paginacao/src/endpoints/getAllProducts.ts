import { Request, Response } from "express";
import { connection } from "../data/connection";
import { product } from "../types";

export async function getAllProducts(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("labecommerce_products");

    const products = result.map(toProducts);

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

const toProducts = (input: any): product => {
  return {
    id: input.id,
    name: input.name,
    image_url: input.image_url,
    user_Id: input.user_Id,
    price: input.price
  };
};
