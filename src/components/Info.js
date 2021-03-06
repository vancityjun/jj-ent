import React from 'react'
import Interaction from './Interaction'

const Info = () => {
  return (
    <div className="container">
      <div className="info">
        <h3 className="subtitle">Official</h3>
        <h1 className="title">After Party</h1>
        <h3 className="subtitle">With Changmo</h3>
      </div>
      <Interaction />
      <h3 className="guestName">
        Presented by&nbsp;
        <img
          className="logo"
          src={require('../images/jjent-logo-black.svg')}
          alt=""
        />
      </h3>
      <div className="detail">
        <p>Live performance by</p>
        <p style={{ fontSize: '1.3em' }}>Changmo &amp; Paul Blanco</p>
        <p className="strong">Sound by J.Kido</p>
        <p>&amp;</p>
        <p className="strong">Rebel's Main DJ, Jed Harper</p>
        <h3 className="date">March 15th 2020</h3>
        <h3 className="location">@ The Everleigh</h3>
        <p>10pm - 3am</p>
        <p>580 King ST W, Toronto</p>
        <span className="miniMap">
          <img src={require('../images/minimap.svg')} alt="" />
        </span>
        <span className="small">Must bring your I.D +19 event</span>
      </div>
    </div>
  )
}

export default Info
