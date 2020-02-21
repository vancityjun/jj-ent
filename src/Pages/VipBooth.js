import React from "react";
import BoothPackages from "../components/BoothPackages";
import BottlePrice from "../components/BottlePrice";

const VipBooth = () => {
  return (
    <div className="vipBooth">
      <BoothPackages />
      <BottlePrice />
    </div>
  );
};

export default VipBooth;
