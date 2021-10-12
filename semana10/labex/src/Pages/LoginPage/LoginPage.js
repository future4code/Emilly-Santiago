import react from "react";
import styled from "styled-components";
import launchDay from "../../img/undraw_launch_day_4e04.svg";

function LoginPage() {
  return (
    <Container>
      <ContainerImg src={launchDay} alt="" />
      <ContainerText>
        <h3>LabeX</h3>
        <input placeholder="email" type="email"></input>
        <input placeholder="password" type="password"></input>
        <div>
            <button>Voltar</button>
            <button>Entrar</button>
        </div>
      </ContainerText>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const ContainerImg = styled.img`
  grid-column: 2/3;
  grid-row: 2/3;

  width: 50%;
  height: 50vh;
  object-fit: contain;
`;

const ContainerText = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
`;
