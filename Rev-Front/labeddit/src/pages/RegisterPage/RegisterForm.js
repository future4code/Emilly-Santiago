import React from "react";
import { ScreenContainer, InputsContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { register } from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

const RegisterForm = ({ setRightButton }) => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    register(clear, form, history, setRightButton, setIsLoading);
  };

  return (
    <ScreenContainer>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"name"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            autoFocus
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
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
            onChange={onChange}
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
              <>Register</>
            )}
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default RegisterForm;
