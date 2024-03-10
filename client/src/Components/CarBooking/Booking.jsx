import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { BsFuelPump } from "react-icons/bs";
import { IoMdPerson, IoMdSettings } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { LuFan } from "react-icons/lu";
import "./Booking.css";
import Payment from "./PaymentPage/Payment";
import DriverDetails from "./DriverDetails";

const Booking = () => {
  const { bookedVehicle, pickupDate, returnDate } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const paymentGateway = () => {
    setShow(true);
  };

  return (
    <div className="car-details-container">
      <div className="car-booking-details">
        <div className="vehicle-booking-details">
          <h2>
            {bookedVehicle.car_brand.charAt(0).toUpperCase() +
              bookedVehicle.car_brand.slice(1) +
              " " +
              bookedVehicle.car_name.charAt(0).toUpperCase() +
              bookedVehicle.car_name.slice(1)}
          </h2>
          <div className="vehicle-features">
            <img src={bookedVehicle.img} alt="car-image" />
            <div className="vehicle-info">
              <div className="vehicle-option">
                <IoMdPerson />
                <h5>{bookedVehicle.seating_capacity}</h5>
                <FaBagShopping />
                <h5>2</h5>
                <LuFan />
                <h5>A/C</h5>
              </div>
              <div className="vehicle-transmission">
                <BsFuelPump />
                <h5>{bookedVehicle.fuel}</h5>
                <IoMdSettings />
                <h5>{bookedVehicle.transmission}</h5>
              </div>
              <div className="car-include-price">
                <h4>Included in price</h4>
                <div className="ticks">
                  <h5>
                    <span>&#10004;</span> Free cancellation
                  </h5>
                  <h5>
                    <span>&#10004;</span> Affordable Rate
                  </h5>
                  <h5>
                    <span>&#10004;</span> Free cancellation
                  </h5>
                  <h5>
                    <span>&#10004;</span> Free cancellation
                  </h5>
                  <h5>
                    <span>&#10004;</span> Free cancellation
                  </h5>
                  <h5>
                    <span>&#10004;</span> Free cancellation
                  </h5>
                </div>
                <div className="booking-reviews">
                  <h5>
                    <span
                      style={{
                        backgroundColor: "#42f5a7",
                        borderRadius: "4px",
                        padding: "3px",
                      }}
                    >
                      4.5
                    </span>{" "}
                    Excellent{" "}
                    <span style={{ color: "#1768e3" }}>(108 reviews)</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="driver">
          <DriverDetails />
        </div>
      </div>
      <div className="car-price-details">
        <div className="location-date">
          <div className="timeline">
            <div className="rightbox">
              <div className="rb-container">
                <ul className="rb">
                  <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">
                      <h3>Pickup Date</h3>
                      <br /> {new Date(pickupDate).toLocaleDateString()}
                      <br /> {bookedVehicle.location}
                    </div>
                  </li>
                  <li className="rb-item" ng-repeat="itembx">
                    <div className="timestamp">
                      <h3>Return Date</h3>
                      <br /> {new Date(returnDate).toLocaleDateString()}
                      <br /> {bookedVehicle.location}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="price-summary">
          <h3 className="price-title">Price Summary</h3>
          <div className="rentel-fee">
            <h4>Car rental fee</h4>
            <h3>₹{bookedVehicle.price}</h3>
          </div>
          <div className="discount">
            <h4>Discount</h4>
            <h3>-₹40</h3>
          </div>
          <hr />
          <div className="total">
            <h3>Total Amount</h3>
            <h2>₹{bookedVehicle.price - 40}</h2>
          </div>

          <div className="book-now">
            <button onClick={paymentGateway} className="book-now-btn">
              Book Now
            </button>
          </div>
        </div>
        {show && <Payment setShow={setShow} />}
      </div>
    </div>
  );
};

export default Booking;
