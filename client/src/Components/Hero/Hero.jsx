import React, { useContext, useEffect } from "react";
import "./Hero.css";
import { Link, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Featured from "../Featured/Featured";
import HowItWorks from "./HowItWorks";
import { AppContext } from "../../contexts/AppContext";
import Footer from "../Footer/Footer";

const Hero = () => {
  const { location, pickupDate, returnDate, dispatch, setDuration, vehicles } =
    useContext(AppContext);
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

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
    dispatch({ type: "SET_PICKUP_DATE", payload: pickupDate });
    dispatch({ type: "SET_RETURN_DATE", payload: returnDate });
    calculateDuration();
  };

  const calculateDuration = () => {
    const startTime = new Date(pickupDate).getTime();
    const endTime = new Date(returnDate).getTime();
    const difference = Math.abs(endTime - startTime);
    const days = Math.floor(difference / (1000 * 3600 * 24));
    setDuration(`${days} days`);
  };

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const searchElement = document.getElementById("search");
      if (searchElement) {
        searchElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchor = document.querySelector('a[href="#search"]');
    anchor.addEventListener("click", handleClick);

    return () => anchor.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <div className="welcome-container" id="home">
        <h1>Welcome to Our Website!</h1>
        <h3>
          Welcome to our car rental hub! Discover smooth travels with our
          premium vehicles. Whether you need a ride for your adventures or want
          to share your own, we've got you covered. Explore our diverse fleet,
          find your perfect match, and start your journey today with
          <strong> CarRent</strong>
        </h3>
        <a href="#search">
          <button className="button button-primary">Rent a Car</button>
        </a>
        <Link to="/renter">
          <button className="button button-secondary">
            List Your Car to rent
          </button>
        </Link>
      </div>
      <div>
        <div className="container" id="search">
          <div className="container-heading">
            <h1>Fast & Easy Way To Rent A Car</h1>
            <h3>
              The CarRent service provider offers an outstanding model and a
              wide variety of vehicle options at the most competitive rates.
            </h3>
            <div className="form-container">
              <div className="trip-form">
                <form action="" onSubmit={handleSubmit}>
                  <h3>Search For Car</h3>
                  <div className="form-header">
                    <div className="div-container">
                      <span>
                        <SlLocationPin />
                      </span>
                      <div className="location">
                        <select
                          id="location"
                          value={location}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_LOCATION",
                              payload: e.target.value,
                            })
                          }
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
                          <option value="thiruvananthapuram">
                            Thiruvananthapuram
                          </option>
                        </select>
                      </div>
                    </div>
                    <hr />
                    <div className="div-container">
                      <span className="hide">
                        <MdOutlineDateRange />
                      </span>
                      <div className="pickup-date">
                        <div className="date-picker-left">
                          <DatePicker
                            selected={pickupDate}
                            value={
                              pickupDate &&
                              new Date(pickupDate).toLocaleDateString()
                            }
                            dateFormat="DD-MM-YYYY"
                            minDate={currentDate}
                            onFocus={(e) => (e.target.readOnly = true)}
                            withPortal
                            onChange={(date) =>
                              dispatch({
                                type: "SET_PICKUP_DATE",
                                payload: date,
                              })
                            }
                            placeholderText="Set Pickup Date"
                          />
                        </div>
                      </div>
                      <span className="hide">
                        <MdOutlineDateRange />
                      </span>
                      <div className="return-date">
                        <div className="date-picker-right">
                          <DatePicker
                            selected={returnDate}
                            minDate={pickupDate || currentDate}
                            dateFormat="DD-MM-YYYY"
                            value={
                              returnDate &&
                              new Date(returnDate).toLocaleDateString()
                            }
                            withPortal
                            onFocus={(e) => (e.target.readOnly = true)}
                            placeholderText="Select Dropoff Date"
                            onChange={(date) =>
                              dispatch({
                                type: "SET_RETURN_DATE",
                                payload: date,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="rent-btn">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-image">
            <img
              src="https://car-rent.powerserviceluxurycarhire.com/wp-content/uploads/2019/03/Porsche-911-GT3.png"
              alt=""
            />
          </div>
        </div>

        <HowItWorks />
      </div>
      <Featured />
      <Footer />
    </>
  );
};

export default Hero;
