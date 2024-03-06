import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AppContext } from "../../contexts/AppContext";

const Navbar = () => {
  const { isLoggedIn, dispatch } = useContext(AppContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogout = () => {
    dispatch({ type: "SET_IS_LOGGED", payload: "" });
  };
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const searchElement = document.getElementById("footer");
      if (searchElement) {
        searchElement.scrollIntoView({ behavior: "smooth" });
      }
    };
    const anchor = document.querySelector('a[href="#footer"]');
    anchor.addEventListener("click", handleClick);

    return () => anchor.removeEventListener("click", handleClick);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Car<span>Rent</span>
        </a>
        {!isNavOpen ? (
          <>
            <div className="navbar-toggle" onClick={toggleNav}>
              <span className="toggle-icon">
                <IoMenu />
              </span>
            </div>
          </>
        ) : (
          <div className="navbar-toggle" onClick={toggleNav}>
            <span className="toggle-icon">
              <IoClose />
            </span>
          </div>
        )}
        <ul className={isNavOpen ? "nav-menu nav-active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/renter"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              Become a Renter
            </Link>
          </li>
          <li className="nav-item" onClick={() => setIsNavOpen(false)}>
            <a href="#footer">Contact</a>
          </li>
          {isLoggedIn && isNavOpen && (
            <li className="nav-item" onClick={handleLogout}>
              <a href="/">Log out</a>
            </li>
          )}

          {isLoggedIn && (
            <>
              <li className="nav-item-profile">
                <div
                  className="dropdown"
                  onClick={toggleDropdown}
                  ref={dropdownRef}
                >
                  <button className="dropbtn">
                    <CgProfile />
                  </button>
                  {showDropdown && (
                    <div className="dropdown-content">
                      <a onClick={() => setIsNavOpen(false)}>View Profile</a>
                      <a href="#" onClick={() => setIsNavOpen(false)}>
                        Edit Profile
                      </a>
                      <a href="/" onClick={handleLogout}>
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li className="nav-login">
              <Link to="/login" onClick={() => setIsNavOpen(false)}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
