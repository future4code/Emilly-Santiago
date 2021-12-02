import React from "react";
import axios from "axios";
import styled from "styled-components"

function ResetButton() {
  const onClickReset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/emilly/clear"
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <ContainerButton>
      <button onClick={onClickReset}>Resetar curtidas</button>
    </ContainerButton>
  );
}

export default ResetButton;


const ContainerButton = styled.div`
position: fixed;
top:0;
left: 0;
`