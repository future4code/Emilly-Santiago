import React from "react";
import styled from "styled-components";
import axios from "axios"

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
    axios.post(url, bory, headers)
    .then((res) => {
      console.log(res)
      this.setState({name: "", email: ""})
    })
    .catch((err) => {
      console.log(err.response.data.message)
    });
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.controlInputName}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.controlInputEmail}
          ></input>
        </div>
        <button type="submit" onClick={this.createUser}>
         Save
        </button>
      </div>
    );
  }
}
