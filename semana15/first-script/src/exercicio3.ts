// a)

type post = {
  autor: string;
  texto: string;
};

const postagem1: post = {
  autor: "Alvo Dumbledore",
  texto: "Não vale a pena viver sonhando e se esquecer de viver",
};

const postagem2: post = {
  autor: "Severo Snape",
  texto: "Menos 10 pontos para Grifinória!",
};

const postagens: post[] = [];
postagens.push(postagem1);
postagens.push(postagem2)

const posts = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver",
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!",
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!",
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!",
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!",
  },
];

// b) A entrada da funçao é  um array de posts e um autor do tipo string. Ja a saida é o resultado da pesquisa q retorna um post

function buscarPostsPorAutor(posts: post[], autorInformado?: string) {
  return posts.filter((post) => {
    return post.autor === autorInformado;
  });
}

console.log(buscarPostsPorAutor(postagens));
