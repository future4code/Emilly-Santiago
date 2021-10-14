import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

function TripDetailsPage() {
  const history = useHistory();
  const params = useParams();
  const [trip, setTrip] = useState({});
  const [approved, setApproved] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trip/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.trip);
        setTrip(response.data.trip);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [approved]);

  const goToTripListPage = () => {
    history.push("/AdminHomePage");
  };

  const ApproveCandidate = (id) => {
    const bory = {
      approve: true,
    };
    const token = localStorage.getItem("token");

    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips/${params.id}/candidates/${id}/decide
`,
        bory,
        header
      )
      .then((response) => {
        console.log(response);
        setApproved("Aprovado");
        alert("Aprovado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ReprovedCandidate = (id) => {
    const bory = {
      approve: false,
    };
    const token = localStorage.getItem("token");

    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips/${params.id}/candidates/${id}/decide
`,
        bory,
        header
      )
      .then((response) => {
        console.log(response);
        setApproved("Reprovado");
        alert("Reprovado");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <ContainerLeft>
        <h3>Candidaturas Pendentes</h3>
        {trip.candidates && trip.candidates > "0" ? (
          trip.candidates.map((elem, index) => {
            return (
              <ContainerCandidate key={index}>
                <CandidateDescription>
                  <p>
                    Nome: <span>{elem.name}</span>
                  </p>
                  <p>
                    Profissão: <span>{elem.profession}</span>
                  </p>
                  <p>
                    Idade: <span> {elem.age}</span>
                  </p>
                  <p>
                    País: <span>{elem.country}</span>
                  </p>
                  <p>
                    Candidatura: <span>{elem.applicationText}</span>
                  </p>
                </CandidateDescription>
                <Candidatebutton>
                  <Button onClick={() => ApproveCandidate(elem.id)}>
                    Aprovar
                  </Button>
                  <Button onClick={() => ReprovedCandidate(elem.id)}>
                    Reprovar
                  </Button>
                </Candidatebutton>
              </ContainerCandidate>
            );
          })
        ) : (
          <p>Sem candidaturas</p>
        )}
      </ContainerLeft>
      <ContainerRigth>
        <div>
          <h1>LabeX</h1>
          <h3>Descrição da Viagem</h3>
          <p>Nome: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays}</p>
          <p>Data: {trip.date}</p>
          <h3>Candidaturas aprovadas</h3>
          {trip.approved && trip.approved > "0" ? (
            trip.approved.map((elem, index) => {
              return <li key={index}>{elem.name}</li>;
            })
          ) : (
            <p>Não há candidaturas aprovadas!</p>
          )}
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
  h3 {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const ContainerRigth = styled.div`
  grid-column: 3/4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerCandidate = styled.div`
  background-color: #e9e8ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 120px;
  padding-left: 20px;
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

const Candidatebutton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-around;
  height: 180px;
`;

const CandidateDescription = styled.div`
  text-align: start;
  p {
    margin: 6px;
    font-weight: bold;
  }
  span {
    font-weight: normal;
  }
`;
