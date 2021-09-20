import React from 'react';
import './ImagemButton.css'
import styled from 'styled-components';

function ImagemButton(props) {
    return (
      <ImagebuttoncontainerDIV>
        <ImagebuttoncontainerIMG src={props.imagem} />
        <p>{props.texto}</p>
      </ImagebuttoncontainerDIV>
    );
}

export default ImagemButton;

const ImagebuttoncontainerDIV = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`;

const ImagebuttoncontainerIMG = styled.img`
  width: 30px;
  margin-right: 10px;
`;