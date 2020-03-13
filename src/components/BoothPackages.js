import React from 'react'
import { boothPackages } from '../data.json'

const PackageLists = () =>
  boothPackages.map((booth, i) => {
    const services = () =>
      booth.services.map((service, i) => {
        return (
          <p className="service" key={i}>
            {service}
          </p>
        )
      })
    return (
      <div className="packageLists" key={i}>
        <h3 className={`title ${booth.soldout ? 'soldout' : 'lowQuantity'}`}>
          {booth.title}
        </h3>
        {/* <p className="price">{'$' + booth.price}</p> */}
        {services()}
      </div>
    )
  })
const BoothPackages = () => {
  return (
    <div className="container boothPackages">
      <h2>Booth Packages</h2>
      {PackageLists()}
      <div className="moreInfo">
        <h3 className="em">ALL THE TABLES ARE IN SALE. CONTACT ORGANIZER.</h3>
        <p>*Fee will be charged for additional person(s) and bottles.</p>
        <p>*All Premium tickets includes line by pass.</p>
      </div>
    </div>
  )
}

export default BoothPackages
