import React from "react";

const Header = () => {
  return (
    <section className="header">
      <img
        className="meteor"
        src={require("../images/meteor-logo.png")}
        alt=""
      />
    </section>
  );
};

export default Header;
