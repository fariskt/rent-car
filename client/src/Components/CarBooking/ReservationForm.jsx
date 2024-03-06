import React from "react";
import "./ReservationForm.css";


const ReservationForm = () => {
  return (
    <div className="driver-details">
            <h3>Driver Details</h3>
            <form action="">
              <div className="form-name">
                <h4>Full Name</h4>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="phone-no-age">
                <h4>Phone Number</h4>
                <input type="number" placeholder="Enter your phone number" />
              </div>
              <div className="age">
                <h4>Age</h4>
                <select name="" id="">
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23+</option>
                </select>
              </div>
              <div className="form-email">
                <h4>Email Address</h4>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>

              <div className="driving-license-inp">
                <h4>Driving License:</h4>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>

              <div className="address">
                <h4>Address</h4>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  className="address-inp"
                />
              </div>
            </form>
          </div>
  );
};

export default ReservationForm;
