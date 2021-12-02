import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import MatchPage from "./components/MatchPage";
import ResetButton from "./components/ResetButton"


function App() {
  const [page, setPage] = useState("MainPage");

  const changePage = () => {
    if (page === "MainPage") {
      setPage("MatchPage");
    } else if (page === "MatchPage") {
      setPage("MainPage");
    }
  };
  return (
    <div className="App">
      {page === "MainPage" ? <MainPage changePage={changePage} /> : <MatchPage changePage={changePage} />}
      <ResetButton/>
    </div>
  );
}

export default App;
