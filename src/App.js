import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import ReactGA from "react-ga";
import AppRoutes from "./routes";

ReactGA.initialize("UA-89794136-2");
ReactGA.pageview("/");

const App = () => {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Nav />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </div>
  );
};

export default App;
