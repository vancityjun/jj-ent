import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <img className="logo" src={require("../images/ambition.png")} alt="" />
        <img
          className="logo"
          src={require("../images/jjent-logo-black.svg")}
          alt=""
        />
        <img className="logo" src={require("../images/SS_black.png")} alt="" />
        <a
          className="instagram"
          href="https://www.instagram.com/jj.ent.toronto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ width: 40 }}
            src={require("../images/instagram-color.svg")}
            alt=""
          />
        </a>
        <p className="copyright">
          Copyright © <span>UNDEFINEDteam</span>. All rights reserved.
        </p>
        <img
          style={{ height: 40 }}
          src={require("../images/undefinedteam-logo.svg")}
          alt=""
        />
      </div>
    </section>
  );
};

export default Footer;
