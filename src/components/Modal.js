import React from "react";

const links = [
  { title: "Early bird", to: "" },
  { title: "General Admission", to: "" },
  { title: "Promo ticket", to: "" }
];
const Buttons = ({ open, setOpen }) =>
  links.map((button, i) => {
    return (
      <a className="btn" href={button.to}>
        {button.title}
      </a>
    );
  });
const Modal = () => {
  return <div className="modal">{Buttons()}</div>;
};

export default Modal;
