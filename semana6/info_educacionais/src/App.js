import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  mudarPagina = () => {
    if (this.state.etapa < 3) {
      this.setState({ etapa: this.state.etapa + 1 });
      console.log(this.state.etapa);
    } else {
      this.setState({ etapa: 0 });
      console.log(this.state.etapa);
    }
  };

  renderizaPaguina = () => {
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
        
        {this.renderizaPaguina()}
        {this.state.etapa ? (
          <div><button onClick={this.mudarPagina}>Próxima Etapa</button></div>
          
        ) : (
          <p>Muito obrigado por participar! Entraremos em contato!</p>
        )}
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`

text-align: center;
background-color: pink;
height: 250px;

display: flex;
flex-direction: column;
justify-content: space-between;

`
