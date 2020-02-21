import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import BoothPackages from "./components/BoothPackages";
import BottlePrice from "./components/BottlePrice";
import Footer from "./components/Footer";
import Interaction from "./components/Interaction";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
