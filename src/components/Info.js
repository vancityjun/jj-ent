import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div className="info">
        <h1 className="title">Changmo</h1>
        <h3 className="subtitle">Offical After Party</h3>
      </div>
      <h3 className="guestName">
        Presented by&nbsp;
        <img
          className="logo"
          src={require("../images/jjlogo-black.svg")}
          alt=""
        />
      </h3>
      <div className="detail">
        <p>Live performance by Changmo and Paul Blanco</p>
        <p>Sound by J.Kido</p>
        <h3>March 15th 2020</h3>
        <h3>The Everleigh</h3>
        <span>Door open 10pm</span>
        <span>Party Ends at 3pm</span>
        <span>Address: 580 King ST W, Toronto</span>
        <span>Must bring your I.D</span>
        <span>
          <p>VIP bottle service available</p>
          <a href="tel:6473009059">(647) 300-9059</a>
          <br />
          <a href="tel:6472053149">(647) 205-3149</a>
        </span>
      </div>
    </div>
  );
};

export default Info;
