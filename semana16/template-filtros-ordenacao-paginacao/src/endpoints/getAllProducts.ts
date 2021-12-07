import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Product } from "../types";

export async function getAllProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const result = await connection("labecommerce_products");

    const products = result.map(toProducts);

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

const toProducts = (input: any): Product => {
  return {
    id: input.id,
    name: input.name,
    image_url: input.image_url,
    price: input.price,
  };
};
