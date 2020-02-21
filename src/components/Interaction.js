import React from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "Ticket", to: "/ticket" },
  { title: "VIP Booth", to: "/vip-booth" }
];

const Buttons = () =>
  links.map((button, i) => {
    return (
      <Link className="btn" to={button.to}>
        {button.title}
      </Link>
    );
  });
const Interaction = () => {
  return <div className="container interaction">{Buttons()}</div>;
};

export default Interaction;
