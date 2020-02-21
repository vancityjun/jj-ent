import React from "react";
import { boothPackages } from "../data.json";

const PackageLists = () =>
  boothPackages.map((booth, i) => {
    const services = () =>
      booth.services.map((service, i) => {
        return <p className="service">{service} </p>;
      });
    return (
      <div className="packageLists" key={i}>
        <h3>{booth.title}</h3>
        {services()}
        <p className="price">{booth.price}</p>
      </div>
    );
  });
const BoothPackages = () => {
  return (
    <div className="container">
      <h2>Booth Packages</h2>
      {PackageLists()}
    </div>
  );
};

export default BoothPackages;
