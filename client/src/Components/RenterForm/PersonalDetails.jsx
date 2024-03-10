import React from 'react'

const PersonalDetails = () => {
  return (
    <div className="personal-details">
              <h2
                style={{
                  display: "flex",
                  width: "330px",
                  fontSize: "24px",
                  color: "rgb(19, 173, 73)",
                  margin: "30px 0",
                }}
              >
                Personal Details 
              </h2>
              <div className="form-name">
                <h4>Full Name</h4>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-name">
                <h4>Email Address</h4>
                <input type="text" placeholder="Enter your last name" />
              </div>
              <div className="phone-no-renter-vehicle">
                <h4>Phone Number</h4>
                <input
                  type="text"
                  pattern="\d*"
                  maxLength="10"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="renter-vehicle">
                <h4>Age</h4>
                <select>
                  <option value="">18</option>
                  <option value="">19</option>
                  <option value="">20</option>
                  <option value="">21</option>
                  <option value="">22</option>
                  <option value="">23</option>
                  <option value="">24</option>
                  <option value="">25</option>
                </select>
              </div>

              <div className="renter-form-document">
                <h4>Driving License</h4>
                <input type="file" name="" id="" />
              </div>
              <div className="renter-form-document">
                <h4>Vehicle Registration Document</h4>
                <input
                  type="file"
                />
              </div>
              <div className="address">
                <h4>Address</h4>
                <textarea
                  rows="4"
                  cols="99"
                  placeholder="Enter your address here..."
                ></textarea>
              </div>
              <div className="city-zipcode">
                <div className="city">
                  <h4>City</h4>
                  <input type="text" placeholder="Enter your City" />
                </div>
                <div className="zip-code">
                  <h4>Zip Code</h4>
                  <input
                    type="number"
                    placeholder="Enter your Zip Code"
                    className="zip-inp"
                  />
                </div>
              </div>
            </div>
  )
}

export default PersonalDetails