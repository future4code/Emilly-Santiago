// console.log("Hello, world!")
import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./data";
import { country } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor pronto!");
});

// ENDPOINT 1 - BUSCAR TODOS OS PAÍSES
app.get("/countries", (req: Request, res: Response) => {
  //   res.send(countries)
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});

// ENDPOINT 3 - Busca com filtros
app.get("/countries/search", (req, res) => {
  let result: country[] = countries;

  if (req.query.name) {
    result = result.filter((country) =>
      country.name.includes(req.query.name as string)
    );
  }

  if (req.query.capital) {
    result = result.filter((country) =>
      country.capital.includes(req.query.capital as string)
    );
  }

  if (req.query.continent) {
    result = result.filter((country) =>
      country.continent.includes(req.query.continent as string)
    );
  }
  res.status(200).send(result);
});

// ENDPOINT 2 - BUSCAR PAÍS POR ID
app.get("/countries/:id", (req, res) => {
  const id = req.params.id;

  const result: country | undefined = countries.find((country) => {
    return country.id === Number(id);
  });

  if (result) {
    res.send(result);
  } else {
    res.status(404).send("País não encontrado");
  }
});

// ENDPOINT 4 - Editar país
app.put("/countries/:id", (req, res) => {
  const id = req.params.id;

  const index: number | undefined = countries.findIndex((country) => {
    return country.id === Number(id);
  });

  const Country: country | undefined = countries.find((country) => {
    return country.id === Number(id);
  });

  if (index !== -1 && Country) {
    if (req.body.name && !req.body.capital) {
      Country.name = req.body.name;
      countries.splice(index, 1, Country);
      res.status(200).send(countries);
    }
    if (req.body.capital && !req.body.name) {
      Country.capital = req.body.capital;
      countries.splice(index, 1, Country);
      res.status(200).send(countries);
    }
    if (req.body.capital && req.body.name) {
      Country.name = req.body.name;
      Country.capital = req.body.capital;
      countries.splice(index, 1, Country);
      res.status(200).send(countries);
    } else {
      res.status(404).send("Parâmetro não permitido ou não encontrado");
      console.log(req.body.name);
    }
  } else {
    res.status(404).send("País não encontrado");
  }
});
