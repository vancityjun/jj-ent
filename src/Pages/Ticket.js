import React from 'react'
const links = [
  {
    title: 'Early bird',
    to: 'http://bit.ly/after-party-general',
    soldout: true
  },
  {
    title: 'General Admission',
    to: 'http://bit.ly/after-party-general',
    soldout: false
  },
  {
    title: 'Promo ticket',
    to: 'http://bit.ly/after-party-promocode',
    soldout: false
  }
]
const Buttons = () =>
  links.map((button, i) => {
    return !button.soldout ? (
      <a
        className="btn"
        href={button.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button.title}
      </a>
    ) : (
      <p className="btn soldout">{button.title}</p>
    )
  })
const Ticket = () => {
  return <div className="container ticket">{Buttons()}</div>
}

export default Ticket
