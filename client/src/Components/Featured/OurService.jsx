import React from 'react'
import './Featured.css'
import { MdLocalOffer } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";


const OurService = () => {
  return (
    <div className='our-service'>
        <div className="service-car-image">
          <img src="https://imgd.aeplcdn.com/1920x1080/n/cw/ec/107719/range-rover-exterior-right-front-three-quarter-46.jpeg?isig=0&q=80&q=80" alt="" />
        </div>
        <div className="service-details">
            <div className="service-title">
            <h3>BEST SERVICES</h3>
            <h1>Feel the best experience with our rental deals</h1>
            </div>
            <div className="service-lists">
              <div className='lists'>
              <span><MdLocalOffer/></span>
              <div className="services">
                <h3>Deals for every budget</h3>
                <p>Lorem ipsum dolor endi amet eaque ipsa, debitis dolorum sint tiae.</p>
              </div>
              </div>
              <div className="lists">
              <span><MdPriceChange/></span>
              <div className="services">
                <h3>Best price guranteed</h3>
                <p>Lorem ipsum dolor endi amet eaque ipsa, debitis dolorum sint tiae.</p>
              </div>
              </div>
              <div className="lists">
              <span><BiSupport/></span>
              <div className="services">
                <h3>Support 24/7</h3>
                <p>Lorem ipsum dolor endi amet eaque ipsa, debitis dolorum sint tiae.</p>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OurService