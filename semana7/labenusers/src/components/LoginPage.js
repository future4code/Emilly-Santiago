import React from "react";
import styled from "styled-components";
import axios from "axios";
import {ButtonSubmit} from "../App"

const headers = {
  headers: {
    Authorization: "emilly-santiago-maryam",
  },
};

export default class LoginPage extends React.Component {
  state = {
    name: "",
    email: "",
  };

  controlInputName = (event) => {
    this.setState({ name: event.target.value });
  };
  controlInputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const bory = {
      name: this.state.name,
      email: this.state.email,
    };
    axios
      .post(url, bory, headers)
      .then((res) => {
        alert("User successfully created");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert(`ERROR! ${err.response.data.message}`);
        console.log(err.response.data)
      });
  };

  render() {
    return (
      <div>
        <InputContainer>
          <label htmlFor="name">Name: </label>
          <Input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.controlInputName}
          ></Input>
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Email: </label>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.controlInputEmail}
          ></Input>
        </InputContainer>
        <ButtonSubmit type="submit" onClick={this.createUser}>
          Save
        </ButtonSubmit>
      </div>
    );
  }
}

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px;
  label {
    color: #273950;
  }
`;

const Input = styled.input`
  color: #273950;
  font-size: 12px;
  padding: 3px;
  border: double 3px #273950;
  margin: 8px;
`;
