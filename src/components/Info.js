import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div className="info">
        <h1 className="title">Changmo</h1>
        <h3 className="subtitle">Official After Party</h3>
      </div>
      <h3 className="guestName">
        Presented by&nbsp;
        <img
          className="logo"
          src={require("../images/jjent-logo-black.svg")}
          alt=""
        />
      </h3>
      <div className="detail">
        <p>Live performance by Changmo and Paul Blanco</p>
        <p>SOUND BY J.KIDO &amp; JED HARPER</p>
        <h3>March 15th 2020</h3>
        <h3>@ The Everleigh</h3>
        <span>10pm - 3am</span>
        <span>580 King ST W, Toronto</span>
        <span className="miniMap">
          <img src={require("../images/minimap.png")} alt="" />
        </span>
        <span className="small">Must bring your I.D</span>
      </div>
    </div>
  );
};

export default Info;
