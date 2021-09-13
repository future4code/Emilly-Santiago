import React from "react";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form action="none">
          <label for="name">1. Qual o seu nome? </label>
          <input type="text" placeholder="nome" id="name" name="name"></input>
          <br />

          <label for="age">2. Qual a sua idade? </label>
          <input type="text" placeholder="idade" id="age" name="age"></input>
          <br />

          <label for="name">3. Qual o seu email? </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
          ></input>
          <br />

          <label for="education">4. Qual a sua escolaridade </label>
          <select name="education" id="education">
            <option></option>
            <option value="fundamental">Ensino médio incompleto</option>
            <option value="medio">Ensino médio completo</option>
            <option value="medio">Ensino superior incompleto</option>
            <option value="superior">Ensino superior completo</option>
          </select>
          <br></br>
        </form>
      </div>
    );
  }
}
