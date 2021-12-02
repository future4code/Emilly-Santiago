# AULA 48 - Semana 15
## Relaçoes SQL

### Exercício 1
a) Foreign key é uma chave estrangeira usada para referenciar uma tabela à outra.

b) 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muito ruim!",
    2,
		"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Sem graça",
    4,
		"003"
);
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
Ta falando q não pode adicionar ou atulaizar um linha filha. Houve falha de restrição na chave estrangira
```
ALTER TABLE Movie DROP COLUMN rating;
```

d) Diz que não posso apagar parent row. Erro na chave estrangeira.


### Exercício 2
a) Essa tabela serve apenas para juntar a tabela filmes com a de atores.

b) 
```
INSERT INTO MovieCast VALUES
('001','001'),('002','002'),('003','003'),('001','004'),('002','005'),('003','005');
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails 
Ta falando q não pode adicionar ou atulaizar um linha filha. Houve falha de restrição na chave estrangira
d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails. Ta falando que esse dado tem parentes e por isso não posso apaga-lo


### Exercício 3
a) Essa query junta as informações e mostra os registros das duas tabelas. O operador garante que o id de uma tabela sera o mesmo do id da outra que foi usado na foreign key.

b) 
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
