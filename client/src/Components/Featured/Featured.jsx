import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";
import { vehicles } from "../../Data/data";

const Featured = () => {
  const vehicle = vehicles.slice(0, 6);

  return (
    <>
      <div className="featured-container">
        <h3 className="feature-deals-title">POPULAR RENTALS DEALS</h3>
        <h1 style={{ margin: "10px" }}>Featured Vehicles</h1>
        <div className="featured-vehicle">
          {vehicle.map((item, index) => (
            <div className="vehicle" key={index}>
              <img src={item.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
