# AULA 45 - Semana 15
## Banco de Dados e Introdução ao SQL

### Exercício 1
a) Além do FLOAT tbm temos VARCHAR e DATE. O VARCHAR é a quantidade de caracteres que pode ser especificado e o DATE gera uma nova data
b) Em SHOW TABLE consegui visalizar a existência da tabela Actor. Em SHOW DATABASE mostra o banco de dados maryam-emilly-correa
c) Com o comando Describe consegui visualizar as linhas e colunas da tabela

### Exercício 2
a) Adicionando a atriz:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) O erro diz que já existe esse item 
c) A Coluna não combina. 
d) O campo nome não tem um valor padrão
e) Valor da data está incorreto 
f) Inserindo mais um ator e uma atriz: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

### Exercício 3
a) Selecionando as atrizes:
```
SELECT * FROM Actor WHERE gender = "female";
```
b) Selecionando o salário do Tony Ramos:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos"
```
c)  Selecionando todos que tem salário menor que 500.000
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
d) O correto é name e não nome. Da um erro pq não reconhece essa coluna.
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4
a) A Query seleciona todas os atores e atrizes que tem o nome que começa com A ou J e que os salarios sao maiores que 300.000.
b) Selecionando atores que não começam com A e tem salário maior q 350.000
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%" ) AND salary > 350000
```
c) Selecionando quem tem g no nome:
```
SELECT * FROM Actor WHERE (name LIKE "%G%" )
```
d) Selecionando quem tem A ou G no nome e salario entre 350.000 e 900.000
```
SELECT * FROM Actor WHERE (name LIKE "%A%" OR "%G%" ) AND salary BETWEEN 350000 AND 900000;
```

### Exercicio 5
a) Criando tabela 
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```
b) Inserindo Filmes:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```
c) Inserindo Filmes:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```
d) Inserindo Filmes:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```
e) Inserindo Filmes:
```
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
    "004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```
### Exercício 6
a) Retorna o id, titulo e ranking de um filme a partir de um id:
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```
b) Retorna um filme a partir de um nome específico.
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";
```
c) Retorna o id, título e sinopse dos filmes com avaliação mínima de 7
```
SELECT id, title, synopsis FROM Movie WHERE rating > 7;
```
### Exercício 7
a) Retorna um filme cujo título contenha a palavra vida:
```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```
b) Pesquisar quem tem no titulo ou sinopse "Termo de Busca": 
```
SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```
c) Procure por todos os filmes que já tenham lançado
```
SELECT * FROM MOVIE WHERE release_date < "2020-05-04";
```
d) Procurar por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
```
SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```

