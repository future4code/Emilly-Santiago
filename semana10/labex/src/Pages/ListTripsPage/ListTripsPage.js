import react, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import space from "../../img/space.jpg";
import { useHistory } from "react-router-dom";
import { useGetTrips } from "../../hooks/useGetTrips";

function ListTripsPage() {
  const history = useHistory();
  const [trips, isLoading, error] = useGetTrips();

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
        {!isLoading && trips ? (
          trips.map((elem) => {
            return (
              <ContainerTrip key={elem.id}>
                <p>
                  Nome: <span>{elem.name}</span>
                </p>
                <p>
                  Descrição: <span>{elem.description}</span>
                </p>
                <p>
                  Duração: <span>{elem.durationInDays}</span>
                </p>
                <p>
                  Data: <span>{elem.date}</span>
                </p>
              </ContainerTrip>
            );
          })
        ) : (
          <p>{error}</p>
        )}
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
  background-color: #e9e8ff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 15px 120px;
  padding-left: 20px;
  p {
    margin: 6px;
    font-weight: bold;
  }
  span {
    font-weight: normal;
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
