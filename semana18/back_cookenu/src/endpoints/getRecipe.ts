import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { RecipeDataBase } from "../data/RecipeDataBase";

export async function getRecipe(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;

    if (!token || !id) {
      res
        .status(422)
        .send("Esse endpoint exige uma autorização no headers e id no params.");
    }

    const authenticatior = new Authenticator();
    const tokenData = authenticatior.getTokenData(token);

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserById(tokenData.id);

    if (!user) {
      res.status(409).send("Token invalido. Usuário não encontrado");
    }

    const recipeDataBase = new RecipeDataBase();
    const recipe = await recipeDataBase.findRecipeById(id);

    if (!recipe) {
      res.status(409).send("Id da Receita inválido. Receita não encontrada");
    }
    res.status(200).send(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
