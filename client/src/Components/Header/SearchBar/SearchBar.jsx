import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import DatePicker from "react-datepicker";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const {
    vehicles,
    duration,
    setDuration,
    searchQuery,
    suggestions,
    location,
    pickupDate,
    returnDate,
    dispatch,
    setSearchQuery,
    setSuggestions,
    selectedLocation,
  } = useContext(AppContext);
  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (event) => {
    event.preventDefault();

    const filtered = vehicles.filter((vehicle) => {
      const pickupParts = vehicle.pickup_date.split("/");
      const returnParts = vehicle.return_date.split("/");

      const vehiclePickup = new Date(
        parseInt(pickupParts[2]),
        parseInt(pickupParts[1]) - 1,
        parseInt(pickupParts[0])
      );
      const vehicleReturn = new Date(
        parseInt(returnParts[2]),
        parseInt(returnParts[1]) - 1,
        parseInt(returnParts[0])
      );

      return (
        vehicle.location === location &&
        vehiclePickup <= new Date(pickupDate) &&
        vehicleReturn >= new Date(returnDate)
      );
    });

    dispatch({ type: "SET_FILTERED_VEHICLES", payload: filtered });
    const newPath = "/collection";
    navigate(newPath);
    dispatch({ type: "SET_LOCATION", payload: location });
    dispatch({ type: "SET_SELECTED_LOCATION", payload: location });
    dispatch({ type: "SET_BOOKED_VEHICLE", payload: filtered });
    calculateDuration();
  };

  const calculateDuration = () => {
    const startTime = new Date(pickupDate).getTime();
    const endTime = new Date(returnDate).getTime();
    const difference = Math.abs(endTime - startTime);
    const days = Math.floor(difference / (1000 * 3600 * 24));
    setDuration(`${days} days`);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchQuery(searchTerm);
    const [brand, ...carNameParts] = searchTerm.split(" ");
    const partialCarName = carNameParts.join(" ");

    const filtered = vehicles.filter((vehicle) => {
      const brandMatches =
        vehicle.brand.toLowerCase().includes(brand) ||
        vehicle.carname.toLowerCase().includes(searchTerm);
      const carNameMatches = vehicle.carname
        .toLowerCase()
        .includes(partialCarName);
      return brandMatches && carNameMatches;
    });

    setSuggestions(filtered);
    dispatch({ type: "SET_FILTERED_VEHICLES", payload: filtered });
  };

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSearchQuery(selectedValue);
    setSuggestions([]);
    const filtered = vehicles.filter(
      (vehicle) => vehicle.carname.toLowerCase() === selectedValue.toLowerCase()
    );

    dispatch({ type: "SET_FILTERED_VEHICLES", payload: filtered });
  };

  const locations = ["malappuram", "kannur"];
  const handleLocation = (option) => {
    dispatch({ type: "SET_SELECTED_LOCATION", payload: option });
  };

  const navigate = useNavigate();
  const handleBackPage = () => {
    const path = "/";
    navigate(path);
  };

  return (
    <div className="search-bar">
      <div className="location-select">
        <span className="back-icon" onClick={handleBackPage}>
          <IoArrowBackSharp />
        </span>
        <select name="" id="" onChange={(e) => handleLocation(e.target.value)}>
          {location && (
            <option value={selectedLocation}>
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </option>
          )}

          {locations.map((item, index) =>
            item.includes(location) ? (
              ""
            ) : (
              <option key={index} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            )
          )}
        </select>

        <div className="selected-date">
          <p>Start time</p>
          <DatePicker
            required
            selected={pickupDate}
            onFocus={(e) => (e.target.readOnly = true)}
            withPortal
            value={pickupDate && new Date(pickupDate).toLocaleDateString()}
            minDate={currentDate}
            onChange={(date) =>
              dispatch({
                type: "SET_PICKUP_DATE",
                payload: date,
              })
            }
            placeholderText="Set Pickup Date"
          />
        </div>
        <div className="duration">
          <p>
            {duration.includes("0")
              ? "24 hr"
              : duration.includes("1")
              ? "1 day"
              : duration}
          </p>
          <span className="arrows">&#8672; &#x25E6; &#8674;</span>
        </div>
        <div className="selected-date">
          <p>End time</p>
          <DatePicker
            className="drop-date"
            required
            withPortal
            onFocus={(e) => (e.target.readOnly = true)}
            selected={returnDate}
            value={returnDate && new Date(returnDate).toLocaleDateString()}
            minDate={pickupDate || currentDate}
            placeholderText="Select Dropoff Date"
            onChange={(date) =>
              dispatch({
                type: "SET_RETURN_DATE",
                payload: date,
              })
            }
          />
        </div>
        <div className="modify-search">
          <button onClick={handleSubmit}>Modify Search</button>
        </div>
        <div className="search-input">
          <span className="search-icon">
            <IoSearchOutline />
          </span>
          <input
            className="input"
            type="text"
            placeholder="Search by car Model or Brand"
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
      </div>
      {searchQuery && (
        <div className="suggestion">
          {suggestions.length < 1 ? (
            ""
          ) : (
            <select
              size={suggestions.length}
              onChange={handleSelect}
              style={{
                display: suggestions.length > 1 ? "block" : "none",
              }}
            >
              {suggestions.map((vehicle, index) => (
                <option key={index} value={vehicle.carname}>
                  {vehicle.brand + " " + vehicle.carname}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
