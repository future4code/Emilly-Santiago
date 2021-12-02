import React from "react";
import { PersonCheckFill, SuitHeartFill, XCircle } from "react-bootstrap-icons";
import { Button, Card, CardHeader, CardFooter } from "reactstrap";
import styled from "styled-components";
import CardMainPage from "./CardMainPage";

function MainPage(props) {
  return (
    <Card>
      <CardHeader>
        <ContainerHeader>
          <Logo>
            <p>astro</p>
            <p>match</p>
          </Logo>
          <Button color="link" onClick={props.changePage}>
            <PersonCheckFill color="#673AB7" size={20} />
          </Button>
        </ContainerHeader>
      </CardHeader>
      <CardMainPage />
    </Card>
  );
}

export default MainPage;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  display: flex;
  color: #673ab7;
  font-size: 1.5rem;
  font-weight: bold;
  p:first-child {
    color: #26c6da;
  }
`;
