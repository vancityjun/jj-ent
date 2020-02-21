import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <img className="logo" src={require("../images/ambition.png")} alt="" />
        <p className="copyright">
          Copyright © <span>UNDEFINEDtam</span>. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
