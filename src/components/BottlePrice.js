import React from "react";
import { bottleList } from "../data.json";

const Menu = () =>
  bottleList.map((spec, i) => {
    const Item = () =>
      spec.items.map((item, i) => {
        return <p>{item}</p>;
      });
    return Item();
  });
const BottlePrice = () => {
  return (
    <div className="container">
      <h2>Bottles</h2>
      <div className="menu">{Menu()}</div>
    </div>
  );
};

export default BottlePrice;
