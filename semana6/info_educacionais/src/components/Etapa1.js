import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
          <label>1. Qual o seu nome? </label>
          <input type="text" placeholder="nome" id="name"></input>
          <br />

          <label>2. Qual a sua idade? </label>
          <input type="text" placeholder="idade" id="age" name="age"></input>
          <br />

          <label>3. Qual o seu email? </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
          ></input>
          <br />
        </form>
      </div>
    );
  }
}
