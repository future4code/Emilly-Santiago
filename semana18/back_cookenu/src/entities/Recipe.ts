export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private createAt: Date,
    private authorId: string
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
  public getAuthorId() {
    return this.authorId;
  }

  static toRecipeModel(data: any): Recipe {
    return new Recipe(data.id, data.title, data.description, data.createAt, data.authorId);
  }
}
