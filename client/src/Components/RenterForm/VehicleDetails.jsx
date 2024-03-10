import React from "react";
import DatePicker from "react-datepicker";

const VehicleDetails = ({
  formData,
  handleChange,
  imageSrc,
  selectedPickupDate,
  selectedReturnDate,
  handleDatePickUpChange,
  handleDateReturnDateChange
  
}) => {
  const currentDate = new Date().toISOString().split("T")[0];

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
          <input
            type="text"
            name="car_name"
            placeholder="Enter car name and model"
            onChange={handleChange}
            required
            value={formData.car_name}
          />
        </div>
        <div className="form-name">
          <h4>Brand Name</h4>
          <select
            name="car_brand"
            value={formData.car_brand}
            required
            onChange={handleChange}
          >
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
          <DatePicker
            selected={selectedPickupDate}
            minDate={currentDate}
            value={formData.pickup_date}
            onChange={(date) => handleDatePickUpChange("pickup_date", date)}
            required
            onFocus={(e) => (e.target.readOnly = true)}
            withPortal
            placeholderText="Enter pickup date"
          />{" "}
        </div>
        <div className="renter-vehicle">
          <h4>Rental Period End</h4>
          <DatePicker
            selected={selectedReturnDate}
            value={formData.return_date}
            minDate={currentDate}
            onChange={(date) => handleDateReturnDateChange("return_date", date)}
            onFocus={(e) => (e.target.readOnly = true)}
            required
            withPortal
            placeholderText="Enter return date"
          />{" "}
        </div>
        <div>
          <h4>Rent Amount</h4>
          <input
            type="text"
            placeholder="Enter rent amount"
            value={formData.price}
            name="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="renter-pick-location">
          <h4>Pickup Location</h4>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="kasaragod">Kasaragod</option>
            <option value="kannur">Kannur</option>
            <option value="wayanad">Wayanad</option>
            <option value="kozhikode">Kozhikode</option>
            <option value="malappuram">Malappuram</option>
            <option value="palakkad">Palakkad</option>
            <option value="thrissur">Thrissur</option>
            <option value="ernakulam">Ernakulam</option>
            <option value="idukki">Idukki</option>
            <option value="kottayam">Kottayam</option>
            <option value="alappuzha">Alappuzha</option>
            <option value="pathanamthitta">Pathanamthitta</option>
            <option value="kollam">Kollam</option>
            <option value="thiruvananthapuram">Thiruvananthapuram</option>
          </select>
        </div>

        <div className="select-option">
          <div className="renter-vehicle">
            <h4>Transmission</h4>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="auto">Auto</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Segment</h4>
            <select
              name="segment"
              value={formData.segment}
              onChange={handleChange}
              required
            >
              <option value="">Select </option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
              <option value="suv/muv">SUV/MUV</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Air Conditioning</h4>
            <select
              name="air_condition"
              value={formData.air_condition}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Number of Seats</h4>
            <select
              name="seat_capacity"
              value={formData.seat_capacity}
              required
              onChange={handleChange}
            >
              <option value="">Select </option>
              <option value="7">7</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="renter-vehicle">
            <h4>Fuel</h4>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
              <option value="ev">EV</option>
            </select>
          </div>
        </div>
        <div className="upload-car-image">
          <h4>Upload Your Car Image</h4>
          <input
            type="file"
            className="myfile"
            accept="image/*"
            id={"file"}
            name="img"
            required
            onChange={handleChange}
          />
        </div>
        {imageSrc && <img src={imageSrc} />}
        <div className="legal-history">
          <h4>Legal History</h4>
          <select>
            <option value="">No Legal Cases Against the Vehicle</option>
            <option value="">Legal Case Pending (No Resolution Yet)</option>
            <option value="">Legal Case Resolved (No Ongoing Issues)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
