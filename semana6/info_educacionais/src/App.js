import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    etapa: 1,
    escolaridade: 0,
  };

  mudaEscolaridade = (event) => {
    this.setState({ escolaridade: event.target.value });
  };

  mudarPagina = (e) => {
    if (this.state.etapa < 3 && this.state.escolaridade) {
      this.setState({ etapa: this.state.etapa + 1 });

      if (this.state.escolaridade <= 2) {
        this.setState({ etapa: this.state.etapa + 2 });
        console.log("etapa: " + this.state.etapa);
        console.log("escolaridade: " + this.state.escolaridade);
      }
    } else {
      this.setState({ etapa: 0 });
    }

    e.preventDefault();
    alert(
      "ID do estado: " +
        this.state.escolaridade +
        "ID da etapa: " +
        this.state.etapa
    );
  };

  renderizaPagina = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      default:
        return <h2>O FORMULÁRIO ACABOU</h2>;
    }
  };

  render() {
    return (
      <MainContainer>
        {this.renderizaPagina()}
        {this.state.etapa === 1 && (
          <>
            <label> 4. Qual a sua escolaridade </label>
            <select
              name="escolaridade"
              value={this.state.escolaridade}
              onChange={this.mudaEscolaridade}
            >
              <option value="0"></option>
              <option value="1">Ensino médio incompleto</option>
              <option value="2">Ensino médio completo</option>
              <option value="3">Ensino superior incompleto</option>
              <option value="4">Ensino superior completo</option>
            </select>
          </>
        )}

        {this.state.etapa ? (
          <div>
            <button onClick={this.mudarPagina}>Próxima Etapa</button>
          </div>
        ) : (
          <p>Muito obrigado por participar! Entraremos em contato!</p>
        )}
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  text-align: start;
  background-color: pink;
  height: 250px;
  width: 900px;
  margin: auto;
  padding: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
