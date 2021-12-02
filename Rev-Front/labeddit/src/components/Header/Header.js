import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar, LogoLabEddit, LogoContainer } from "./styled";
import { gotToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const Header = ({ rightButton, setRightButton }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButton(<AccountCircleOutlinedIcon />);
      gotToLogin(history);
    } else {
      gotToLogin(history);
    }
  };
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <LogoContainer>
          <LogoLabEddit
            src={
              "https://icons-for-free.com/iconfiles/png/512/reddit+reddit+icon+reddit+logo+social+social+media+socialmedia+icon-1320136414660205165.png"
            }
          />
          <Typography color="secondary" variant="h4">
            LabEddit
          </Typography>
        </LogoContainer>

        <Button color="secondary" onClick={rightButtonAction}>
          {rightButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
