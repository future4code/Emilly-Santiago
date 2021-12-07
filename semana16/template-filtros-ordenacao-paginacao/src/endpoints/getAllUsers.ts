import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const result = await connection("labecommerce_users");

    const users = result.map(toUser);

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

const toUser = (input: any): User => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password,
  };
};
