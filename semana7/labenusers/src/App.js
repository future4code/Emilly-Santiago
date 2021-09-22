import React from "react";
import LoginPage from "./components/LoginPage";
import ListPage from "./components/ListPage";

class App extends React.Component {
  state = {
    PageButton: "GO TO LIST PAGE",
  };

  changePage = () => {
    if (this.state.PageButton === "GO TO LIST PAGE") {
      this.setState({ PageButton: "GO TO LOGIN PAGE" });
    }
    if (this.state.PageButton === "GO TO LOGIN PAGE") {
      this.setState({ PageButton: "GO TO LIST PAGE" });
    }
  };

  renderPage = () => {
    switch (this.state.PageButton) {
      case "GO TO LIST PAGE":
        return <LoginPage />;
      case "GO TO LOGIN PAGE":
        return <ListPage />;
      default:
        return <LoginPage />;
    }
  };
  render() {
    return (
      <div>
        <button type="submit" onClick={this.changePage}>
          {this.state.PageButton}
        </button>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
