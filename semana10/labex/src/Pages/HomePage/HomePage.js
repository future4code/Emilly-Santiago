import react from "react";
import styled from "styled-components";
import spaceCar from "../../img/spaceCar.jpg";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/LoginPage");
  };

  const goToListTrisPage = () => {
    history.push("/ListTripsPage");
  };

  return (
    <Container>
      <ContainerImg src={spaceCar} alt="spaceCar" />
      <ContainerText>
        <h1>LabeX</h1>
        <h3>Sua empresa de viagens espaciais</h3>
        <div>
          <Button onClick={goToLoginPage}>Login</Button>
          <Button onClick={goToListTrisPage}>Viagens</Button>
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ContainerImg = styled.img`
  grid-column: 1/3;

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
`;

const Button = styled.button`
  background-color: #6c63ff;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 20px;
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  :hover {
    background-color: #3c3885;
  }
`;
