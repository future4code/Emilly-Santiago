import { DataBase } from "./DataBase";
import { Recipe } from "../entities/Recipe";

export class RecipeDataBase extends DataBase {
  public async createRecipe(recipe: Recipe): Promise<void> {
    try {
      await DataBase.connection("cookenu_recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        createAt: recipe.getCreateAt(),
        authorId: recipe.getAuthorId(),
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }

  public async findRecipeById(id: string): Promise<Recipe> {
    try {
      const recipe = await DataBase.connection("cookenu_recipes")
        .select("*")
        .where({ id: id });

      return recipe[0] && Recipe.toRecipeModel(recipe[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }

  public async findRecipesByAuthor(authorId: string): Promise<Recipe> {
    try {
      const recipes = await DataBase.connection("cookenu_recipes")
        .select("*")
        .where({ authorId: authorId });

      return recipes[0] && Recipe.toRecipeModel(recipes[0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.Message);
    }
  }
}
