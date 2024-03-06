import React from "react";

const VehicleDetails = () => {
  return (
    <>
      <h3
        style={{
          display: "flex",
          width: "330px",
          fontSize: "24px",
          color: "rgb(19, 173, 73)",
          margin: "30px 0",
        }}
      >
        Vehicle Information
      </h3>
      <div className="vehicle-details">
        <div className="form-name">
          <h4>Car Name</h4>
          <input type="text" placeholder="Enter car name and model" />
        </div>
        <div className="form-name">
          <h4>Brand Name</h4>
          <select name="" id="">
            <option value="">Select Brand</option>
            <option value="toyota">Toyoto</option>
            <option value="honda">Honda</option>
            <option value="mahindra">Mahindra</option>
            <option value="hyundai">Hyundai</option>
            <option value="maruti">Maruti</option>
          </select>
        </div>

        <div className="renter-vehicle">
          <h4>Rental Period Start</h4>
          <input
            type="text"
            placeholder="Enter rental start date"
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />{" "}
        </div>
        <div className="renter-vehicle">
          <h4>Rental Period End</h4>
          <input
            type="text"
            placeholder="Enter rentel end date"
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />{" "}
        </div>
        <div>
          <h4>Rent Amount</h4>
          <input type="number" placeholder="Enter rent amount"/>
        </div>
        <div className="renter-pick-location">
          <h4>Pickup Location</h4>
          <select name="" id="">
            <option value="">Kasaragod</option>
            <option value="">Kannur</option>
            <option value="">Wayanad</option>
            <option value="">Kozhikode</option>
            <option value="">Malappuram</option>
            <option value="">Palakkad</option>
            <option value="">Thrissur</option>
            <option value="">Ernakulam</option>
            <option value="">Idukki</option>
            <option value="">Kottayam</option>
            <option value="">Alappuzha</option>
            <option value="">Pathanamthitta</option>
            <option value="">Kollam</option>
            <option value="">Thiruvananthapuram</option>
          </select>
        </div>
        <div className="select-option">
          <div className="renter-vehicle">
            <h4>Transmission</h4>
            <select name="" id="">
              <option value="">Auto</option>
              <option value="">Manual</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Air Conditioning</h4>
            <select name="" id="">
              <option value="">Yes</option>
              <option value="">No</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Number of Seats</h4>
            <select name="" id="">
              <option value="">7</option>
              <option value="">5</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Fuel</h4>
            <select name="" id="">
              <option value="">Diesel</option>
              <option value="">Petrol</option>
              <option value="">Other</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Segment</h4>
            <select name="" id="">
              <option value="">Sedan</option>
              <option value="">Hatchback</option>
              <option value="">SUV/MUV</option>
            </select>
          </div>
        </div>
        <div className="upload-car-image">
          <h4>Upload Your Car Image</h4>
          <input type="file" />
        </div>
        <div className="legal-history">
          <h4>Legal History</h4>
          <select id="legalHistory" name="legalHistory" required>
            <option value="clean">No Legal Cases Against the Vehicle</option>
            <option value="pending">
              Legal Case Pending (No Resolution Yet)
            </option>
            <option value="resolved">
              Legal Case Resolved (No Ongoing Issues)
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
