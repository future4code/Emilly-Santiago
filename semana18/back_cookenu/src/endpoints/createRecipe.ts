import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { IdGenerated } from "../services/IdGenerated";
import { Recipe } from "../entities/Recipe";
import { RecipeDataBase } from "../data/RecipeDataBase";

export async function createRecipe(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { title, description } = req.body;

    if (!title || !description) {
      res
        .status(422)
        .send("Insira o 'title' e a 'description' da receita no body");
    }
    if (!token) {
      res.status(422).send("Esse endpoint exige uma autorização no headers.");
    }

    const authenticatior = new Authenticator();
    const tokenData = authenticatior.getTokenData(token);

    const userDataBase = new UserDataBase();
    const user = await userDataBase.findUserById(tokenData.id);

    if (!user) {
      res.status(409).send("Token invalido. Usuário não encontrado");
    }
    const IdGenerator = new IdGenerated();
    const id = IdGenerator.generatedId();
    const creatAt = new Date()
    const authorId = tokenData.id;
    const NewRecipe = new Recipe(id, title, description, creatAt, authorId);
    
    const recipeDataBase = new RecipeDataBase()
    await recipeDataBase.createRecipe(NewRecipe);
    res.status(200).send({message: 'Receita criada com sucesso', title})
  } catch (error) {
    res.status(400).send(error.message);
  }
}
