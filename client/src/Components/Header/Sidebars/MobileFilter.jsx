import React, { useContext, useEffect } from "react";
import { filters, typeCars, vehicles } from "../../../Data/data";
import "./MobileFilter.css";
import { IoClose } from "react-icons/io5";
import { AppContext } from "../../../contexts/AppContext";

const MobileFilter = ({ setShowMobile, setFiltersClicked }) => {
  const {
    selectedFilters,
    sortingOption,
    setSelectedFilters,
    dispatch,
    state,
  } = useContext(AppContext);

  const toggleFilterOption = (filter, option) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filter]: {
        ...prevState[filter],
        [option]: !prevState[filter][option],
      },
    }));
    setFiltersClicked(true);
  };

  const option = ["Low to High", "High to Low"];

  const handleSortingChange = (value) => {
    dispatch({ type: "SET_SORTING_OPTION", payload: value });

    const sorted = [...vehicles].sort((a, b) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);
      return value === "Low to High" ? priceA - priceB : priceB - priceA;
    });

    const filtered = selectedFilters.location
      ? sorted.filter((vehicle) => vehicle.location === state.location)
      : sorted;
    dispatch({ type: "SET_FILTERED_VEHICLES", payload: filtered });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mobile-sidebar">
      <div className="first-header">
        <h4>Sort By</h4>
        <h5 onClick={() => setShowMobile(false)}>
          <IoClose />
        </h5>
      </div>

      <h4 style={{ margin: "10px", fontSize: "18px", color: "#98a5b2" }}>
        Filter by
      </h4>
      <div className="sortby-price">
        <ul>
          {option.map((item, index) => (
            <li
              key={index}
              className={`checkbox-item ${
                item === sortingOption && "selected"
              }`}
              onClick={() => handleSortingChange(item)}
            >
              Price: {item}
            </li>
          ))}
        </ul>
      </div>
      {Object.entries(filters).map(([filter, options]) => (
        <div key={filter} className="sidebar-content">
          <div className="sidebar-data">
            <div>
              {filter.includes("segment") && (
                <>
                  <h5 style={{ margin: "7px 10px", color: "#98a5b2" }}>
                    Segment
                  </h5>
                  <div className="segment-container">
                    {typeCars.map((item, index) => (
                      <div
                        key={index}
                        className={`${
                          selectedFilters[filter][item.segment]
                            ? "segment-clicked"
                            : "segment"
                        }`}
                        onClick={() => toggleFilterOption(filter, item.segment)}
                      >
                        <img
                          className="segment-img"
                          src={item.segmentimage}
                          alt=""
                        />
                        <h6>
                          {item.segment.includes("suv/muv")
                            ? "SUV"
                            : item.segment.charAt(0).toUpperCase() +
                              item.segment.slice(1)}
                        </h6>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              {filter.includes("brand") && (
                <div key={filter} className="brand-container">
                  <h4 style={{ color: "#98a5b2", margin: "10px" }}>Brand</h4>
                  {options.map((option, index) => (
                    <div key={index} className="inp-container">
                      <input
                        type="checkbox"
                        id={option}
                        checked={selectedFilters[filter][option]}
                        onChange={() => toggleFilterOption(filter, option)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              {filter.includes("fuel") && (
                <div key={filter}>
                  <h4 style={{ color: "#98a5b2", margin: "10px" }}>Fuel</h4>
                  <div className="fuel-container">
                    {options.map((option, index) => (
                      <p
                        key={index}
                        onClick={() => toggleFilterOption(filter, option)}
                        className={`${
                          selectedFilters[filter][option]
                            ? "clicked-border"
                            : ""
                        }`}
                      >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              {filter.includes("transmission") && (
                <div>
                  <div key={filter}>
                    <h4 style={{ color: "#98a5b2", margin: "10px" }}>
                      Transmission
                    </h4>
                    <div className="fuel-container">
                      {options.map((option, index) => (
                        <p
                          key={index}
                          className={`${
                            selectedFilters[filter][option]
                              ? "clicked-border"
                              : ""
                          }`}
                          onClick={() => toggleFilterOption(filter, option)}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              {filter.includes("seating_capacity") && (
                <div>
                  <div key={filter}>
                    <h4 style={{ color: "#98a5b2", margin: "10px" }}>
                      Seating Capacity
                    </h4>
                    <div className="fuel-container">
                      {options.map((option, index) => (
                        <p
                          key={index}
                          className={`${
                            selectedFilters[filter][option]
                              ? "clicked-border"
                              : ""
                          }`}
                          onClick={() => toggleFilterOption(filter, option)}
                        >
                          {option.charAt(0).toUpperCase() +
                            option.slice(1) +
                            " Seats"}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="apply-btn">
        <button className="apply-button" onClick={() => setShowMobile(false)}>
          Apply
        </button>
      </div>
    </div>
  );
};
export default MobileFilter;
