import React, { useState } from "react";
import { InputsContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const LoginForm = ({ setRightButton }) => {
  const [form, handleInputChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(clear, form, history, setRightButton, setIsLoading);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"email"}
          value={form.email}
          onChange={handleInputChange}
          label={"email"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={handleInputChange}
          label={"password"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          {isLoading ? (
            <CircularProgress size={24} color={"inherit"} />
          ) : (
            <>Login</>
          )}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default LoginForm;
