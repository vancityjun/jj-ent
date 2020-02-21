import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import BoothPackages from "./components/BoothPackages";
import BottlePrice from "./components/BottlePrice";
import Media from "./components/Media";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Info />
      <BoothPackages />
      <BottlePrice />
      <img src={require("./images/duet.png")} alt="" />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
