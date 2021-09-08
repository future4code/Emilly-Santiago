import React from "react";
import styled from "styled-components";

function CardGrande(props) {
  return (
    <Bigcardcontainer>
      <BigcardcontainerIMG src={props.imagem} />
      <BigcardcontainerDIV>
        <BigcardcontainerH4>{props.nome}</BigcardcontainerH4>
        <p>{props.descricao}</p>
      </BigcardcontainerDIV>
    </Bigcardcontainer>
  );
}

export default CardGrande;

const Bigcardcontainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`;

const BigcardcontainerIMG = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const BigcardcontainerH4 = styled.h4`
  margin-bottom: 15px;
`;

const BigcardcontainerDIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;
