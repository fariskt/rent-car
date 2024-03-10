import React, { createContext, useState, useEffect, useReducer } from "react";
import { filters } from "../Data/data";

export const AppContext = createContext();

const initailState = {
  vehicles: JSON.parse(sessionStorage.getItem("vehicles") || "[]"),
  filteredVehicles: JSON.parse(
    sessionStorage.getItem("filteredVehicles") || "[]"
  ),
  location: sessionStorage.getItem("location") || "",
  sortingOption: sessionStorage.getItem("sortingOption") || "",
  pickupDate: sessionStorage.getItem("pickupDate") || "",
  returnDate: sessionStorage.getItem("returnDate") || "",
  selectedLocation: sessionStorage.getItem("selectedLocation") || "",
  bookedVehicle: JSON.parse(sessionStorage.getItem("bookedVehicle") || "[]"),
  isLoggedIn: sessionStorage.getItem("isLoggedIn") || "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "SET_FILTERED_VEHICLES":
      return { ...state, filteredVehicles: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_PICKUP_DATE":
      return { ...state, pickupDate: action.payload };
    case "SET_RETURN_DATE":
      return { ...state, returnDate: action.payload };
    case "SET_SELECTED_LOCATION":
      return { ...state, selectedLocation: action.payload };
    case "SET_BOOKED_VEHICLE":
      return { ...state, bookedVehicle: action.payload };
    case "SET_IS_LOGGED":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rent-car-api.vercel.app/api/renter-vehicle"
        );
        const vehiclesData = await response.json();
        dispatch({ type: "SET_VEHICLES", payload: vehiclesData });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const initializeSelectedFilters = () => {
    const initialSelectedFilters = {};
    Object.keys(filters).forEach((filter) => {
      initialSelectedFilters[filter] = {};
      filters[filter].forEach((option) => {
        initialSelectedFilters[filter][option] = false;
      });
    });
    return initialSelectedFilters;
  };
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const storedFilters = sessionStorage.getItem("selectedFilters");
    return storedFilters
      ? JSON.parse(storedFilters)
      : initializeSelectedFilters();
  });

  useEffect(() => {
    sessionStorage.setItem("vehicles", JSON.stringify(state.vehicles));
    sessionStorage.setItem(
      "filteredVehicles",
      JSON.stringify(state.filteredVehicles)
    );
    sessionStorage.setItem("location", state.location);
    sessionStorage.setItem("sortingOption", state.sortingOption);
    sessionStorage.setItem("pickupDate", state.pickupDate);
    sessionStorage.setItem("returnDate", state.returnDate);
    sessionStorage.setItem("selectedLocation", state.selectedLocation);
    sessionStorage.setItem(
      "bookedVehicle",
      JSON.stringify(state.bookedVehicle)
    );
    sessionStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    sessionStorage.setItem("isLoggedIn", state.isLoggedIn);
  }, [
    state.vehicles,
    state.filteredVehicles,
    state.location,
    state.sortingOption,
    state.pickupDate,
    state.returnDate,
    state.selectedLocation,
    state.bookedVehicle,
    state.isLoggedIn,
    selectedFilters,
  ]);

  const contextValue = {
    ...state,
    duration,
    setDuration,
    searchQuery,
    setSearchQuery,
    suggestions,
    setSuggestions,
    selectedFilters,
    setSelectedFilters,
  };

  return (
    <AppContext.Provider value={{ state, dispatch, ...contextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
