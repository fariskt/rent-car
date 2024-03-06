import React from "react";
import "./RenterForm.css";
import PersonalDetails from "./PersonalDetails";
import VehicleDetails from "./VehicleDetails";

const Renter = () => {
  return (
    <>
      <h1 style={{ paddingTop: "90px", textAlign: "center" }}>Rent Your Car</h1>
      <div className="renter-form-container">
        <form action="">
          <VehicleDetails />
          <PersonalDetails />
        </form>
        <div className="renter-btn">
          <button type="button" className="renter-form-btn">
            Reserve Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Renter;
