import React from "react";
import { ScreenContainer, SignUpButton } from "./styled";
import { Button } from "@material-ui/core";
import RegisterForm from "./RegisterForm";
import { gotToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const RegisterPage = ({ setRightButton }) => {
  useUnprotectedPage();
  const history = useHistory();

  return (
    <ScreenContainer>
      <RegisterForm setRightButton={setRightButton} />
      <SignUpButton>
        <Button
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          onClick={() => {
            gotToLogin(history);
          }}
        >
          Login
        </Button>
      </SignUpButton>
    </ScreenContainer>
  );
};

export default RegisterPage;
