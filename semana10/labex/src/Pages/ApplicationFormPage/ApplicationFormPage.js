import react from "react";
import styled from "styled-components";
import LostOnline from "../../img/undraw_to_the_moon_v1mv.svg";
import { useHistory } from "react-router-dom";

function ApplicationFormPage() {
  const history = useHistory();

  const goBack = () => {
    history.push("/ListTripsPage");
  };

  return (
    <Container>
      <ContainerUpper>
        <h1>LabeX</h1>
        <ContainerImg src={LostOnline} alt="" />
      </ContainerUpper>
      <ContainerLower>
        <form>
          <p>Inscreva-se para uma viagem </p>
          <Select>
            <option>Escolha uma viagem</option>
          </Select>
          <Input type="text" placeholder="nome"></Input>
          <Input type="number" placeholder="idade"></Input>
          <Input type="text" placeholder="Texto de Candidatura"></Input>
          <Input type="text" placeholder="Profissão"></Input>
          <Select>
            <option>Escolha um país</option>
          </Select>
          <div>
            <Button onClick={goBack}>Voltar</Button>
            <Button>Enviar</Button>
          </div>
        </form>
      </ContainerLower>
    </Container>
  );
}

export default ApplicationFormPage;

const Container = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  width: 100%;
  height: 100vh;
`;

const ContainerUpper = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ContainerLower = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  p {
    font-size: 25px;
  }
`;

const ContainerImg = styled.img`
  width: 25%;
  height: 25vh;
  object-fit: contain;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
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
