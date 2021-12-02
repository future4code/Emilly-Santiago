# AULA 47 - Semana 15
## Knex.js

### Exercício 1
a) O raw é um método que nos permite escrever SQL puro no nosso código typescript.
b) 
```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name ='${name}'
  `);
  return result[0][0];
};

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/search", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    console.log(await searchActor(name.replace("_"," ")));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/search?name=Rick_Sanches e veja o que acontece no terminal
```
c)
```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};
```

### Exercício 2
a) 
```
const updateActor = async (id: string, salary: number): Promise<void> => {
  await connection
    .update({
      salary: salary,
    })
    .where("id", id);
};
```
b) 
```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

```
c) 
```
const getAvgSlaryByGender = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("Salary as average")
    .where({ gender });

  return result[0].average;
};
```

### Exercício 3

```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```


### Exercício 4
a)
```
app.put("/actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });

    res.status(200).send("Ator foi atualizado!");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});
```
b) 
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```
