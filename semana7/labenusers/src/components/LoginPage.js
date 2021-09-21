import React from "react";
import styled from "styled-components";

export default class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            name="name"
            type="text"
            value={this.props.name}
            onChange={this.props.updateName}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="email"
            value={this.props.email}
            onChange={this.props.updateEmail}
          ></input>
        </div>
        <button type="submit" onClick={this.props.createUser}>
          Salvar
        </button>
      </div>
    );
  }
}
