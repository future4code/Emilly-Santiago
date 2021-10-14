import react, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import launchDay from "../../img/undraw_launch_day_4e04.svg";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const goBack = () => {
    history.goBack();
  };

  const goToAdminHome = () => {
    
    //console.log(email, password);
    const bory = {
      email: email,
      password: password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        bory
      )
      .then((response) => {
        //console.log("Deu certo", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("bory", JSON.stringify(bory));
        history.push("/AdminHomePage");
      })
      .catch((error) => {
        console.log(error.response);
        alert("Usuário não autorizado")
      });
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <ContainerImg src={launchDay} alt="" />
      <ContainerText>
        <h1>LabeX</h1>
        <Input
          placeholder="email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        ></Input>
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        ></Input>
        <div>
          <Button onClick={goBack}>Voltar</Button>
          <Button onClick={goToAdminHome}>Entrar</Button>
        </div>
      </ContainerText>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ContainerImg = styled.img`
  grid-column: 2/3;
  grid-row: 2/3;

  width: 50%;
  height: 50vh;
  object-fit: contain;
`;

const ContainerText = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
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

const Input = styled.input`
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 6px 20px 16px 20px;
  resize: vertical;
`;
