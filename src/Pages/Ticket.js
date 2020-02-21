import React from "react";
const links = [
  {
    title: "Early bird",
    to:
      "https://www.eventbrite.ca/e/changmo-after-party-in-toronto-with-jj-entertainment-tickets-95779482009"
  },
  {
    title: "General Admission",
    to:
      "https://www.eventbrite.ca/e/changmo-after-party-in-toronto-with-jj-entertainment-tickets-95779482009"
  },
  {
    title: "Promo ticket",
    to: "https://www.eventbrite.ca/e/promo-code-tickets-tickets-96086462195"
  }
];
const Buttons = () =>
  links.map((button, i) => {
    return (
      <a className="btn" href={button.to} target="_blank">
        {button.title}
      </a>
    );
  });
const Ticket = () => {
  return <div className="container ticket">{Buttons()}</div>;
};

export default Ticket;
