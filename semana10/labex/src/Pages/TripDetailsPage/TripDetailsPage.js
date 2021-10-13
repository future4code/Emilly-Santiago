import react from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {
  const history = useHistory();

  const goToTripListPage = () => {
    history.push("/AdminHomePage");
  };
  return (
    <Container>
      <ContainerLeft>
        <h3>Candidaturas Pendentes</h3>
        <ContainerCandidate>
          <p>Nome: </p>
          <p>Profissão: </p>
          <p>Idade: </p>
          <p>País: </p>
          <p>Candidatura: </p>
          <div>
            <Button>Aprovar</Button>
            <Button>Reprovar</Button>
          </div>
        </ContainerCandidate>
      </ContainerLeft>
      <ContainerRigth>
        {/* <iframe
        src="https://giphy.com/embed/YRjZCWEIqMuEU"
        width="480"
        height="271"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe> */}
        <div>
          <h3>Descrição da Viagem</h3>
          <p>Nome: </p>
          <p>Descrição: </p>
          <p>Planeta: </p>
          <p>Duração: </p>
          <p>Data: </p>
          <h3>Candidaturas aprovadas</h3>
          <p>Não há candidaturas aprovadas!</p>
          <Button onClick={goToTripListPage}>Voltar</Button>
        </div>
      </ContainerRigth>
    </Container>
  );
}

export default TripDetailsPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ContainerLeft = styled.div`
  grid-column: 1/3;
  text-align: center;
  background-color: #c2bfff;
`;

const ContainerRigth = styled.div`
  grid-column: 3/4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerCandidate = styled.div`
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
