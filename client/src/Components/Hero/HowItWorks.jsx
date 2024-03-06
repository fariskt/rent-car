import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdCarRental } from "react-icons/md";
import "./HowWorks.css";

const HowItWorks = () => {
  return (
    <>
      <div className="reserve-car">
        <h3 className="how-works">HOW IT WORKS</h3>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>
          Better Way to Rent Your Perfect Cars
        </h1>
        <div className="reserve-car-icons">
          <h3>
            <span className="material-symbols-outlined">
              <GiPathDistance />
            </span>
            <span className="resereve-car-heading">
              Choose Your Pickup Location
            </span>
          </h3>
          <h3>
            <span className="material-symbols-outlined">
              <RiShakeHandsLine />
            </span>
            <span className="resereve-car-heading">Select Best Deal</span>
          </h3>
          <h3>
            <span className="material-symbols-outlined">
              <MdCarRental />
            </span>
            <span className="resereve-car-heading">
              Reserve Your Rental Car
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
