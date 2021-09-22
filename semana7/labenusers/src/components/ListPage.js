import React from "react";
import axios from "axios";
import styled from "styled-components";
import { ButtonSubmit } from "../App";


const headers = {
  headers: {
    Authorization: "emilly-santiago-maryam",
  },
};

export default class ListPage extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    axios
      .delete(url, headers)
      .then((res) => {
        alert("user deleted successfully");
        this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    const userListComponent = this.state.users.map((user) => {
      return (
        <UserCard>
          <li key={user.id}>
            {user.name}
            <ButtonSubmit
              type="submit"
              onClick={() => {
                this.deleteUser(user.id);
              }}
            >
              delete
            </ButtonSubmit>
          </li>
        </UserCard>
      );
    });
    return <div>{userListComponent}</div>;
  }
}

const UserCard = styled.div`
  border: 1px solid #273950;
  padding: 10px;
  margin: 10px;
  width: 300px;
  background-color: #c7cbd3;
  
  li {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #273950;
  }
`;
