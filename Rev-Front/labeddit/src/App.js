import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function App() {
  const token = localStorage.getItem("token");

  const [rightButton, setRightButton] = useState(
    token ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton} />
        <Router setRightButton={setRightButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
