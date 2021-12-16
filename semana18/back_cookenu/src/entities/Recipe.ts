export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private createAt: Date,
    private author_id: string
  ) {}

  public getId() {
    return this.id;
  }
  public getTitle() {
    return this.title;
  }
  public getDescription() {
    return this.description;
  }
  public getCreateAt() {
    return this.createAt;
  }
  public getAuthor_id() {
    return this.author_id;
  }

  static toRecipeModel(data: any): Recipe {
    return new Recipe(data.id, data.title, data.description, data.createAt, data.author_id);
  }
}
