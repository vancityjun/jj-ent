import React from "react";
import BoothPackages from "../components/BoothPackages";
import BottlePrice from "../components/BottlePrice";

const VipBooth = () => {
  return (
    <div className="vipBooth">
      <BoothPackages />
      <BottlePrice />
      <div className="container">
        <p>VIP bottle service available</p>
        <a href="tel:6473009059">(647) 300-9059</a>
        <br />
        <a href="tel:6472053149">(647) 205-3149</a>
      </div>
    </div>
  );
};

export default VipBooth;
