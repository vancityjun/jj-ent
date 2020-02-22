import React from "react";
import BoothPackages from "../components/BoothPackages";
import BottlePrice from "../components/BottlePrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const VipBooth = () => {
  return (
    <div className="vipBooth">
      <BoothPackages />
      <BottlePrice />
      <div className="lightBackground">
        <div className="container vipBooth">
          <p>VIP bottle service available</p>
          <a href="mailto:jjent.toronto@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; jjent.toronto@gmail.com
          </a>
          <br />
          <a href="tel:6473009059">
            <FontAwesomeIcon icon={faMobileAlt} />
            &nbsp; (647) 300-9059
          </a>
          <br />
          <a href="tel:6472053149">
            <FontAwesomeIcon icon={faMobileAlt} />
            &nbsp; (647) 205-3149
          </a>
        </div>
      </div>
    </div>
  );
};

export default VipBooth;
