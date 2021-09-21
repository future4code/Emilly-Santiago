import React from "react";
import LoginPage from "./components/LoginPage";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "emilly-santiago-maryam",
  },
};


class App extends React.Component {
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
      email:this.state.email
    }
      axios.get(url, bory, headers)
      .then()
      .catch()
  };

  render() {
    return (
      <div>
        <LoginPage
          updateName={this.controlInputName}
          updateEmail={this.controlInputEmail}
          name={this.state.name}
          email={this.state.email}
          createUser={this.createUser}
        />
      </div>
    );
  }
}

export default App;
