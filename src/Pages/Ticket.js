import React from "react";
const links = [
  { title: "Early bird", to: "" },
  { title: "General Admission", to: "" },
  { title: "Promo ticket", to: "" }
];
const Buttons = () =>
  links.map((button, i) => {
    return (
      <a className="btn" href={button.to}>
        {button.title}
      </a>
    );
  });
const Ticket = () => {
  return <div className="container ticket">{Buttons()}</div>;
};

export default Ticket;
