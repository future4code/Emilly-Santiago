import React from "react";
import LoginPage from "./components/LoginPage";
import ListPage from "./components/ListPage";
import styled from "styled-components";

class App extends React.Component {
  state = {
    PageButton: "LIST PAGE",
  };

  changePage = () => {
    if (this.state.PageButton === "LIST PAGE") {
      this.setState({ PageButton: "LOGIN PAGE" });
    }
    if (this.state.PageButton === "LOGIN PAGE") {
      this.setState({ PageButton: "LIST PAGE" });
    }
  };

  renderPage = () => {
    switch (this.state.PageButton) {
      case "LIST PAGE":
        return <LoginPage />;
      case "LOGIN PAGE":
        return <ListPage />;
      default:
        return <LoginPage />;
    }
  };
  render() {
    return (
      <MainContainer>
        <ButtonSubmit type="submit" onClick={this.changePage}>
          {this.state.PageButton}
        </ButtonSubmit>
        <CardContainer>{this.renderPage()}</CardContainer>
      </MainContainer>
    );
  }
}

export default App;

const MainContainer = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
 
  height: 97vh;
  width: 98vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const CardContainer = styled.div`
  background-color: #C7CBD3;
  margin: 0;
  height: 50vh;
  width: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  padding: 2px 5px;
  text-align: center;
`;

export const ButtonSubmit = styled(Button)`
  background-color: #3d535f;
  color: #c7cbd3;
  margin: 5px;
  
`;