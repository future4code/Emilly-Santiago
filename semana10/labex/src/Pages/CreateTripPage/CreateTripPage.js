import styled from "styled-components";
import LostOnline from "../../img/undraw_Lost_online_re_upmy.svg";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import axios from "axios";

function CreateTripPage() {
  const history = useHistory();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const goBack = () => {
    history.push("/AdminHomePage");
  };

  const createTrip = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const header = {
      headers: {
        auth: token,
      },
    };
    //console.log(form, token);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/emilly-santiago-cruz/trips`,
        form,
        header
      )
      .then((reponse) => {
        //console.log(reponse);
        alert("Viagem Criada com sucesso");
        cleanFields();
      })
      .catch((error) => {
        console.log(error);
        alert("Algo deu errado :(");
      });
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
            name={"name"}
            value={form.name}
            onChange={onChange}
            required
          ></Input>
          <Select
            value={form.planet}
            name={"planet"}
            onChange={onChange}
            required
          >
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
            name={"date"}
            value={form.date}
            onChange={onChange}
            required
            // por algum motivo o pattern não esta com o comportamento esperado
            // pattern={"^([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)d{4}$"}
            // title={"Formato dd/mm/aaaa"}
          ></Input>
          <Input
            type="text"
            placeholder="descrição"
            name={"description"}
            value={form.description}
            onChange={onChange}
            required
          ></Input>
          <Input
            type="number"
            placeholder="duração em dias"
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
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
