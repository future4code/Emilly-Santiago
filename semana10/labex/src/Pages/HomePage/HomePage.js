import react from "react";
import styled from "styled-components";
import spaceCar from "../../img/spaceCar.jpg";

function HomePage() {
  return (
    <Container>
      <ContainerImg src={spaceCar} alt="Lamp" />
      <ContainerText>
        <h1>LabeX</h1>
        <h3>Sua empresa de viagens espaciais</h3>
        <div>
          <button>Login</button>
          <button>Viagens</button>
        </div>
      </ContainerText>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr;
`;

const ContainerImg = styled.img`
  grid-column: 2/3;

  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const ContainerText = styled.div`
  grid-column: 3/4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
`;
