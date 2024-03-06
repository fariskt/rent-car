import React, { useContext, useEffect, useState } from "react";
import SideBar from "./Sidebars/Sidebar";
import MobileFilter from "./Sidebars/MobileFilter";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";
import "./Collection.css";
import { AppContext } from "../../contexts/AppContext";
import SearchBar from "./SearchBar/SearchBar";
import { vehicles } from "../../Data/data";
import FilteredVehicle from "./FilteredVehicle";

const CarCollection = () => {
  const {
    filteredVehicles,
    selectedFilters,
    setSelectedFilters,
    location,
    sortingOption,
    dispatch,
    state,
  } = useContext(AppContext);

  const [showMobile, setShowMobile] = useState(false);
  const [filtersClicked, setFiltersClicked] = useState(false);

  const handleSortingChange = (event) => {
    const { value } = event.target;
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

  const handleDeselect = (item) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      Object.keys(updatedFilters).forEach((filter) => {
        if (updatedFilters[filter].hasOwnProperty(item)) {
          updatedFilters[filter][item] = false;
        }
      });
      return updatedFilters;
    });
  };

  const selectedTags = Object.keys(selectedFilters).reduce((accumulator, filterKey) => {
    const options = Object.keys(selectedFilters[filterKey])
      .filter(optionKey => selectedFilters[filterKey][optionKey])
      .map(optionKey => optionKey);
  
    return [...accumulator, ...options];
  }, []);
  

  const updateFilteredVehicles = () => {
    const filtered = vehicles.filter((vehicle) => {
      return Object.entries(selectedFilters).every(([filter, options]) => {
        if (filter === "location") {
          return vehicle.location === state.location;
        } else {
          const selectedOptions = Object.entries(options).filter(
            ([option, selected]) => selected
          );
          if (selectedOptions.length === 0) return true;
          return selectedOptions.some(
            ([option, selected]) => vehicle[filter] === option && selected
          );
        }
      });
    });
    dispatch({ type: "SET_FILTERED_VEHICLES", payload: filtered });
  };

  useEffect(() => {
    if (filtersClicked) {
      updateFilteredVehicles();
    }
  }, [selectedFilters, filtersClicked]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SearchBar />
      <div className="collection-container">
        <div className="pc">
          <SideBar
            filtersClicked={filtersClicked}
            setFiltersClicked={setFiltersClicked}
          />
        </div>
        <div className="mobile">
          {showMobile && (
            <MobileFilter
              setShowMobile={setShowMobile}
              filtersClicked={filtersClicked}
              setFiltersClicked={setFiltersClicked}
            />
          )}
        </div>
        <div className="content">
          <div className="filter-icon">
            <div className="iconn">
              <span>
                <HiOutlineAdjustmentsHorizontal
                  onClick={() => setShowMobile(true)}
                />
              </span>
            </div>
            <hr className="hr-rule" />
            <div className="filter-tag">
              <div className="tags-container">
                <div>
                  <p>
                    {sortingOption ? "Price: " + sortingOption : "Featured"}
                  </p>
                  {sortingOption && (
                    <span key="sortingOption-close" className="delete-icon">
                      <IoMdCloseCircle
                        onClick={() =>
                          dispatch({ type: "SET_SORTING_OPTION", payload: "" })
                        }
                      />
                    </span>
                  )}
                </div>

                {selectedTags.map((item, index) => (
                  <div key={index}>
                    <p key={index}>
                      {item.includes("7") || item.includes("5")
                        ? item + " seats"
                        : item.includes("suv/muv")
                        ? "SUV"
                        : item.charAt(0).toUpperCase() + item.slice(1)}
                    </p>
                    <span
                      className="delete-icon"
                      onClick={() => handleDeselect(item)}
                    >
                      <IoMdCloseCircle />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sort-by">
            <h3 className="no-vehicle">
              {filteredVehicles.length <= 0
                ? "No Vehicle Found"
                : filteredVehicles.length +
                  ` ${
                    filteredVehicles.length <= 1 ? "Car" : "Cars"
                  } available for rental  ${
                    location &&
                    "in " + location.charAt(0).toUpperCase() + location.slice(1)
                  }`}
            </h3>
            <h4>
              Sort By: {""}
              <select
                name=""
                id=""
                onChange={handleSortingChange}
                value={sortingOption}
              >
                <option value="">Latest</option>
                <option value="Low to High">Price: Low to High</option>
                <option value="High to Low">Price: High to Low</option>
              </select>
            </h4>
          </div>

          <FilteredVehicle />
        </div>
      </div>
    </>
  );
};
export default CarCollection;
