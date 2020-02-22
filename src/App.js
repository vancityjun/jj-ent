import React from "react";
import "./App.scss";
import { BrowserRouter, Router } from "react-router-dom";
import Nav from "./components/Nav";

import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Nav />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
