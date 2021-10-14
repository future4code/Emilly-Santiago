import react, { useState } from "react";
import styled from "styled-components";
import LostOnline from "../../img/undraw_Lost_online_re_upmy.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateTripPage() {
  const history = useHistory();
  const [tripName, setTripName] = useState("");
  const [tripPlanet, setTripPlanet] = useState("");
  const [tripDate, setTripDate] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const [tripDuration, setTripDuration] = useState("");

  const goBack = () => {
    history.push("/AdminHomePage");
  };

  const createTrip = (e) => {
    e.preventDefault();
    const bory = {
      name: tripName,
      planet: tripPlanet,
      date: tripDate,
      description: tripDescription,
      durationInDays: tripDuration,
    };
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    console.log(bory, token);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips`,
        bory,
        header
      )
      .then((reponse) => {
        //console.log(reponse);
        alert("Viagem Criada com sucesso");
      })
      .catch((error) => {
        console.log(error);
        alert("Algo deu errado :(")
      });
  };

  const controlInputTripName = (event) => {
    setTripName(event.target.value);
  };

  const controlInputTripPlanet = (event) => {
    setTripPlanet(event.target.value);
  };

  const controlInputTripDate = (event) => {
    setTripDate(event.target.value);
  };

  const controlInputTripDescription = (event) => {
    setTripDescription(event.target.value);
  };

  const controlInputTripDuration = (event) => {
    setTripDuration(event.target.value);
  };

  return (
    <Container>
      <ContainerUpper>
        <h1>LabeX</h1>
        <ContainerImg src={LostOnline} alt="" />
      </ContainerUpper>
      <ContainerLower>
        <form onSubmit={createTrip}>
          <p>Criar Viagem </p>
          <Input
            type="text"
            placeholder="nome"
            value={tripName}
            onChange={controlInputTripName}
            required
          ></Input>
          <Select value={tripPlanet} onChange={controlInputTripPlanet} required>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Jupter">Jupter</option>
            <option value="Saturno">Saturno</option>
            <option value="Neturno">Neturno</option>
            <option value="Plutão">Plutão</option>
          </Select>
          <Input
            type="text"
            placeholder="dd/mm/aaaa"
            value={tripDate}
            onChange={controlInputTripDate}
            required
          ></Input>
          <Input
            type="text"
            placeholder="descrição"
            value={tripDescription}
            onChange={controlInputTripDescription}
            required
          ></Input>
          <Input
            type="number"
            placeholder="duração em dias"
            value={tripDuration}
            onChange={controlInputTripDuration}
            required
          ></Input>
          <div>
            <Button onClick={goBack}>Voltar</Button>
            <ButtonInput type="submit" value="Criar" />
          </div>
        </form>
      </ContainerLower>
    </Container>
  );
}

export default CreateTripPage;

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

const ButtonInput = styled.input`
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
