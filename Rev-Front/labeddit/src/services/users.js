import axios from "axios";
import { BASE_URL } from "../constants/url";
import { gotToFeed } from "../routes/coordinator";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

//POST - Login
export const login = (clear, bory, history, setRightButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, bory)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      gotToFeed(history);
      setRightButton(<AccountCircleIcon />);
      setIsLoading(false);
    })
    .catch((err) => {
      alert(
        " Error when using the following parameters: ",

        err.response.data.errors.map((el) => el.password)
      );
      console.log(err.response);
      localStorage.clear();
      setIsLoading(false);
    });
};

// POST - Signup
export const register = (
  clear,
  bory,
  history,
  setRightButton,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, bory)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      clear();
      gotToFeed(history);
      setRightButton(<AccountCircleIcon />);
      setIsLoading(false);
    })
    .catch((err) => {
      alert(err.response.data.message);
      localStorage.clear();
      setIsLoading(false);
    });
};
