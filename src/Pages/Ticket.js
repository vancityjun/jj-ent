import React from "react";
const links = [
  {
    title: "Early bird",
    to: "http://bit.ly/after-party-general"
  },
  {
    title: "General Admission",
    to: "http://bit.ly/after-party-general"
  },
  {
    title: "Promo ticket",
    to: "http://bit.ly/after-party-promocode"
  }
];
const Buttons = () =>
  links.map((button, i) => {
    return (
      <a
        className="btn"
        href={button.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button.title}
      </a>
    );
  });
const Ticket = () => {
  return <div className="container ticket">{Buttons()}</div>;
};

export default Ticket;
