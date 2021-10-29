import React from "react";
import { ScreenContainer, SignUpButton } from "./styled";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { gotToRegister } from "../../routes/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({ setRightButton}) => {
  useUnprotectedPage();
  const history = useHistory();

  return (
    <ScreenContainer>
      <LoginForm  setRightButton={setRightButton}/>
      <SignUpButton>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => {
            gotToRegister(history);
          }}
        >
          new on LabEddit? Register
        </Button>
      </SignUpButton>
    </ScreenContainer>
  );
};

export default LoginPage;
