import React, { useContext } from "react";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const FilteredVehicle = () => {
  const { filteredVehicles, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const handleBooking = (item) => {
    dispatch({ type: "SET_BOOKED_VEHICLE", payload: item });
    const path = "/booking";
    navigate(path);
  };
  
  return (
    <div className="car-collection-container">
      {filteredVehicles.map((item, index) => (
        <div className="car-collection" key={index}>
          <div className="car-full-details">
            <div className="car-image">
              <img src={item.img} alt={item.car_name} />
            </div>
            <div className="car-name">
              <p>
                {item.car_brand.charAt(0).toUpperCase() +
                  item.car_brand.slice(1)}
              </p>
              <h5>
                {item.car_name.charAt(0).toUpperCase() + item.car_name.slice(1)}
              </h5>
            </div>
            <div className="car-details">
              <p>
                <BsFuelPump />
                &nbsp;
                {item.fuel.charAt(0).toUpperCase() + item.fuel.slice(1)}
              </p>
              <p>
                <GiGearStickPattern />
                &nbsp;
                {item.transmission.charAt(0).toUpperCase() +
                  item.transmission.slice(1)}
              </p>
              <p>
                <MdAirlineSeatReclineExtra />
                &nbsp;
                {item.seating_capacity} Seater
              </p>
            </div>
          </div>
          <div className="car-price">
            <h2>&#8377;{item.price}</h2>
            <button onClick={() => handleBooking(item)}>Book &#x279C;</button>
          </div>
          <div className="range">
            <p>270 kms | Prices exclude fuel cost</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredVehicle;
