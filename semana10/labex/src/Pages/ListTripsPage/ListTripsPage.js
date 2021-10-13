import react from "react";
import styled from "styled-components";
import space from "../../img/space.jpg";
import { useHistory } from "react-router-dom";

function ListTripsPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToAppicationFormPage = () => {
    history.push("/ApplicationFormPage");
  };
  return (
    <Container>
      <ContainerRight>
        <Title>
          <p>Lista de Viagens</p>

          <Button onClick={goToHomePage}>Voltar</Button>
          <Button onClick={goToAppicationFormPage}>Inscrever</Button>
        </Title>
        <ContainerTrip>
          <p>Nome: </p>
          <p>Descrição: </p>
          <p>Duração: </p>
          <p>Data: </p>
        </ContainerTrip>
      </ContainerRight>
      <ContainerLeft>
        <ContainerImg src={space} />
      </ContainerLeft>
    </Container>
  );
}

export default ListTripsPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ContainerRight = styled.div`
  grid-column: 1/3;
`;

const ContainerLeft = styled.div`
  grid-column: 3/4;
`;

const ContainerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContainerTrip = styled.div`
  background-color: #dbd9fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 120px;
  padding-left: 20px;
  :hover {
    background-color: #e9e8ff;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
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
