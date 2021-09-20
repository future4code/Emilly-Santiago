import React from "react";
import styled from "styled-components";



function CardPequeno(props) {
  return (
    <SmallcardContainer>
      <SmallcardcontainerImg src={props.imagem} alt="icone" />
      <SmallcardContainerDIV>
        <h4>{props.titulo}: </h4>
        <SmallcardContainerP>{props.texto}</SmallcardContainerP>
      </SmallcardContainerDIV>
    </SmallcardContainer>
  );
}

export default CardPequeno;

const SmallcardContainer  = styled.div `
  display: flex;
  flex-direction: row;

  align-items: center;
  border: 1px solid black;
  padding: 20px 20px;
  margin-bottom: 10px;
  height: 80px;
`
const SmallcardcontainerImg = styled.img`
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const SmallcardContainerDIV = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
`;

const SmallcardContainerP = styled.p`
  margin-left: 10px;
`;