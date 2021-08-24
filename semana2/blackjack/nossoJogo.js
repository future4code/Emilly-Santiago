/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!");

let confirmation = confirm("Gostaria de iniciar uma nova rodada?");

if (confirmation) {
  console.log("Rodada iniciada. Comprando cartas...");

  const user_card1 = comprarCarta();
  const user_card2 = comprarCarta();
  const user_points = user_card1.valor + user_card2.valor;
  console.log(
    "Usuário - cartas: " +
      user_card1.texto +
      " " +
      user_card2.texto +
      " - puntuação " +
      user_points
  );

  const comp_card1 = comprarCarta();
  const comp_card2 = comprarCarta();
  const comp_points = comp_card1.valor + comp_card2.valor;
  console.log(
    "Computador - cartas: " +
      comp_card1.texto +
      " " +
      comp_card2.texto +
      " - puntuação " +
      comp_points
  );

  if (comp_points > user_points) {
    console.log("O computador ganhou!");
  } else if (comp_points < user_points) {
    console.log("O usuário ganhou!");
  } else {
    console.log("Empate!");
  }
} else if (confirmation) {
  console.log("O jogo acabou");
}
