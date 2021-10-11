import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

        <label>5. Qual o curso? </label>
        <input type="text" placeholder="curso"></input>
        <br></br>

        <label>6. Qual a unidade de ensino? </label>
        <input type="text" placeholder="faculdade"></input>
        <br></br>
      </div>
    );
  }
}
