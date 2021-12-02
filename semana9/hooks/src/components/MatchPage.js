import React, { useEffect, useState } from "react";
import { FilePersonFill } from "react-bootstrap-icons";
import { Button, Card, CardHeader } from "reactstrap";
import styled from "styled-components";
import axios from "axios";


function MatchPage(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emilly/matches"
      )
      .then((res) => {
        console.log(res.data.matches);
        setMatches(res.data.matches);
      });
  }, []);

  return (
    <Card>
      <CardHeader>
        <ContainerHeader>
          <Logo>
            <p>astro</p>
            <p>match</p>
          </Logo>
          <Button color="link" onClick={props.changePage}>
            <FilePersonFill color="#673AB7" size={20} />
          </Button>
        </ContainerHeader>
      </CardHeader>
      <ListContainer>
        {matches.map((profile) => {
          return <ItemContainer>
            <Avatar src={profile.photo} alt="imagem da pessoa"/>
            <p>{profile.name}</p>
          </ItemContainer>;
        })}
      </ListContainer>
    </Card>
  );
}

export default MatchPage;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const ListContainer = styled.div`
  padding: 8px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid gray;

  :hover {
    background-color: lightgray;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 8px;
  width: 30px;
`;
