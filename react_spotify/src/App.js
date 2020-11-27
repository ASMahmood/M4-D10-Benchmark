import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  }
}

export default App;
