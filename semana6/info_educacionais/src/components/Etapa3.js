import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <label>5. Por que você não terminou um curso de graduação? </label>
        <input type="text"></input>
        <br></br>

        <label>6. Você fez algum curso complementar? </label>
        <select>
            <option>Nenhum</option>
            <option>Curso Técnico</option>
            <option>Curso de Inglês</option>
        </select>
      </div>
    );
  }
}
