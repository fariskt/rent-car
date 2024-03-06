import React, { useContext } from "react";
import { filters } from "../../../Data/data";
import "./Sidebar.css";
import { AppContext } from "../../../contexts/AppContext";

const Sidebar = ({setFiltersClicked}) => {
  const {
    filteredVehicles,
    selectedFilters,
    setSelectedFilters,
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

  const getOptionCount = (filter, option) => {
    const count = filteredVehicles.filter(
      (vehicle) => vehicle[filter] === option
    ).length;
    return count;
  };

  return (
    <div className="sidebar">
      <h2>Filter By</h2>
      <div className="sidebar-content">
        {Object.entries(filters).map(([filter, options]) => (
          <div key={filter} className="sidebar-content">
            <h3>
              {filter.includes("price")
                ? ""
                : filter.includes("location")
                ? ""
                : filter.includes("seating_capacity")
                ? "Seating Capacity"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </h3>
            {filter.includes("price")
              ? ""
              : filter.includes("location")
              ? ""
              : options.map((option) => (
                  <div key={option} className="inp-container">
                    <input
                      type="checkbox"
                      id={option}
                      checked={selectedFilters[filter][option]}
                      onChange={() => toggleFilterOption(filter, option)}
                    />
                    <label htmlFor={option}>
                      {option.includes("suv/muv")
                        ? "SUV/MUV"
                        : filter.includes("seating_capacity")
                        ? `${option + " seats"}`
                        : option.charAt(0).toUpperCase() + option.slice(1)}{" "}
                      ({getOptionCount(filter, option)})
                    </label>
                  </div>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
