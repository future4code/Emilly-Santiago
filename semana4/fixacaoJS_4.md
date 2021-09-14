
```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contador = 0;
  let resposta = ""
  arrayDeNumeros.forEach(element => {
    if (element == numeroEscolhido) {
      contador++;
    }
  });

    if(contador > 0) {
      resposta = `O número ${numeroEscolhido} aparece ${contador}x`
    } else { 
      resposta = "Número não encontrado"
    }
    return resposta
}
```