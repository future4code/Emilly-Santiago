import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { SuitHeart, XLg } from "react-bootstrap-icons";

import { Card, CardTitle, CardText } from "reactstrap";

function CardMainPage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emilly/person"
      )
      .then((res) => {
        console.log("PERFIL: ", res.data.profile);
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const chooseProfile = (choice) => {
    const body = {
      id: profileToChoose.id,
      choice: choice,
    };
    setProfileToChoose(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emilly/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
        getProfileToChoose();
      });
  };

  const onClickNo = () => {
    chooseProfile(false);
  };

  const onClickYes = () => {
    chooseProfile(true);
  };

  return (
    <div>
      {profileToChoose ? (
        <>
          {" "}
          <Card bory inverse>
            <CardImg className="card-img" src={profileToChoose.photo} alt="" />

            <CardImgOverlay className="card-img-overlay">
              <CardTitle tag="h5">
                {profileToChoose.name}, {profileToChoose.age}
              </CardTitle>
              <CardText>{profileToChoose.bio}</CardText>
            </CardImgOverlay>
          </Card>
          <ButtonsContainer>
            <ButtonRound onClick={onClickNo} className="btn btn-outline-danger">
              <XLg />
            </ButtonRound>
            <ButtonRound
              onClick={onClickYes}
              className="btn btn-outline-success"
            >
              <SuitHeart />
            </ButtonRound>
          </ButtonsContainer>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default CardMainPage;

const CardImg = styled.img`
  padding: 10px;
  height: 420px;
  width: auto;
`;

const CardImgOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  padding: 10px;
`;
const ButtonRound = styled.button`
  border-radius: 50%;
`;
