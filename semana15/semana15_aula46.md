# AULA 46 - Semana 15
## Aprofundamento SQL



### Exercício 1
a) Apaga a coluna de salario.
b) Altera a coluna gender para sex com 6 caracteres.
c) Mudar a coluna gender para um gender com 255 caracteres.
d) alterando gender para 100 caracteres:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


### Exercício 2
a) Modificando nome e dada do id=003:
```
UPDATE Actor SET 
name = "Rick Sanchez", birth_date="2006-01-06"
WHERE id = "003";

```
b) Mudando pra letra maiúscula e minúscula:
```
UPDATE Actor SET 
name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor SET 
name = "Juliana Paes"
WHERE id = "005";
```
c) Atualizando dados d id=005:
```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```
d) Essa operação nao me gerou erro, mas nenhum arquivo foi alterado pq ele não existe. 



### Exercício 3
a) Apagando a fernanda:
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```
b) Selecionando o salário do Tony Ramos:
```
DELETE FROM Actor WHERE gender="male" and salary > 1000000;
```


### Exercício 4
a) Escreva uma query que pegue o maior salário de todos os atores e atrizes:
```
SELECT MAX(salary) FROM Actor;
```
b) Escreva uma query que pegue o menor salário das atrizes:
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c) Escreva uma query que pegue a quantidade de atrizes:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) Escreva uma query que pegue a soma de todos os salários
```
SELECT SUM(salary) FROM Actor;
```


### Exercicio 5
a) Ele agrupou a quantidade em duas categorias: female e male. No meu banco tenho 2 males e 2 female.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética:
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
c) Faça uma query que retorne todos os atores ordenados pelo salário:
```
SELECT * FROM Actor ORDER BY salary;
```
d) Faça uma query que retorne os atores com os três maiores salarios:
```
SELECT * FROM Actor 
ORDER BY salary DESC LIMIT 3;
```
e) Faça uma query que retorne a média de salário por gênero:
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```


### Exercício 6
a):
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b) 
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c) 
```
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "002";
```
d) Nao da erro, mas ele fala que não modificou nada. 
```
DELETE FROM Movie WHERE id = "004"

UPDATE Movie
SET
	playing_limit_date = "2022-12-31"
WHERE id = "004";
```


### Exercício 7
a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
```
select * from Movie where rating > 7.5;
```
b) Qual a média das avaliações dos filmes? 
```
select AVG(rating) from Movie;
```
c) Qual a quantidade de filmes em cartaz?
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
d) Qual a quantidade de filmes que ainda irão lançar?
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e) Qual a maior nota dos filmes?
```
SELECT MAX(rating) FROM Movie;
```
f) Qual a menor nota dos filmes?
```
SELECT MIN(rating) FROM Movie;
```


### Exercício 8
a) Retorne todos os filmes em ordem alfabética
```
SELECT * FROM Movie ORDER BY title;
```
b) Retorne os 5 primerios filmes em ordem descrente alfabética 
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```
c) Retorne os 3 filmes mais recentes em cartaz
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
d) Retorne os 3 filmes melhor avalidos
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```
