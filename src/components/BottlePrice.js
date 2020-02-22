import React from "react";
import { bottleList } from "../data.json";

const Menu = () =>
  bottleList.map((bottle, i) => {
    const Item = () =>
      bottle.items.map((item, i) => {
        return <p key={i}>{item}</p>;
      });
    return (
      <div className="bottleLists" key={i}>
        <h3 className="title">{bottle.spec}</h3>
        {Item()}
      </div>
    );
  });
const BottlePrice = () => {
  return (
    <div className="container bottleList">
      <h2>Bottle List</h2>
      <div className="menu">{Menu()}</div>
      <div className="moreInfo">*More bottles available upon request.</div>
    </div>
  );
};

export default BottlePrice;
