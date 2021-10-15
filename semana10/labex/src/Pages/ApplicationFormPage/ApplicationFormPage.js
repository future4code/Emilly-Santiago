import react, { useState } from "react";
import styled from "styled-components";
import LostOnline from "../../img/undraw_to_the_moon_v1mv.svg";
import { useHistory } from "react-router-dom";
import { useGetTrips } from "../../hooks/useGetTrips";
import useForm from "../../hooks/useForm";
import axios from "axios";

function ApplicationFormPage() {
  const history = useHistory();
  const [trips, isLoading, error] = useGetTrips();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const [tripID, setTripID] = useState("");

  const goBack = () => {
    history.push("/ListTripsPage");
  };

  const controlInputTripID = (event) => {
    setTripID(event.target.value);
  };

  const ApplyToTrip = (e) => {
    e.preventDefault();

    //console.log(bory, tripID);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips/${tripID}/apply`,
        form
      )
      .then((response) => {
        alert(response.data.message);
        cleanFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ContainerUpper>
        <h1>LabeX</h1>
        <ContainerImg src={LostOnline} alt="" />
      </ContainerUpper>
      <ContainerLower>
        <form onSubmit={ApplyToTrip}>
          <p>Inscreva-se para uma viagem </p>
          <Select value={tripID} onChange={controlInputTripID} required>
            <option value="">Escolha uma viagem</option>
            {!isLoading &&
              trips &&
              trips.map((elem) => {
                return (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                );
              })}
          </Select>
          <Input
            name={"name"}
            type="text"
            placeholder="nome"
            value={form.name}
            onChange={onChange}
            required
          ></Input>
          <Input
            name={"age"}
            type="number"
            placeholder="idade"
            value={form.age}
            onChange={onChange}
            required
          ></Input>
          <Input
            name={"applicationText"}
            type="text"
            placeholder="Texto de Candidatura"
            value={form.applicationText}
            onChange={onChange}
            required
          ></Input>
          <Input
            name={"profession"}
            type="text"
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
            required
          ></Input>
          <Input
            name={"country"}
            type="text"
            placeholder="Digite o país"
            value={form.country}
            onChange={onChange}
            required
          ></Input>
          <div>
            <Button onClick={goBack}>Voltar</Button>
            <ButtonInput type="submit" value="Enviar" />
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
