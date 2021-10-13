import react from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function AdminHomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/LoginPage");
  };

  const goToHomePage = () => {
    history.push("/");
  };

  const goToCreateTripPage = () => {
    history.push("/CreateTripPage");
  };

  const goToTripDetailsPage = () => {
    history.push("/TripDetailsPage");
  };
  return (
    <Container>
      <ContainerLeft>
        <h3>Selecione uma viagem ou crie uma nova</h3>
        <Button onClick={goToCreateTripPage}>Criar viagem</Button>
        <ContainerTrip onClick={goToTripDetailsPage}>
          <p>Viagem a Saturno</p>
          <button>Lixeira</button>
        </ContainerTrip>
      </ContainerLeft>
      <ContainerRigth>
        <h1>LabeX</h1>
        <p>Navege com a gente!</p>

        <ContainerButton>
          <Button onClick={goToHomePage}>Voltar</Button>
          <Button onClick={goToLoginPage}>Logout</Button>
        </ContainerButton>
      </ContainerRigth>
    </Container>
  );
}

export default AdminHomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const ContainerLeft = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;

  background-color: #c2bfff;
  h3 {
    text-align: center;
    margin-top: 40px;
  }

  :nth-child(1) {
    text-align: center;
  }
`;

const ContainerRigth = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ContainerButton = styled.div``;

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

const ContainerTrip = styled.div`
  background-color: #dbd9fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 80px;
  padding-left: 20px;
  :hover {
    background-color: #e9e8ff;
  }
`;
