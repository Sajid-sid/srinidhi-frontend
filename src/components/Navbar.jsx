import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <h2>Srinidhi</h2>
        </NavLink>
      </div>

      <nav className="menu">
        <NavLink to="/">Home</NavLink>

        {/* About Dropdown */}
        <div className="dropdown">
          <NavLink to="/about" className="dropdown-title">
            About Us <FaAngleDown />
          </NavLink>

          <div className="dropdown-menu">
            <NavLink to="/repair">Repair</NavLink>
            <NavLink to="/amc">AMC's</NavLink>  
            

          </div>
        </div>
      

        {/* Services Dropdown */}
        <div className="dropdown">
          <NavLink to="/service" className="dropdown-title">
            Our Services <FaAngleDown />
          </NavLink>

          <div className="dropdown-menu">
              <NavLink to="/service">Services</NavLink>
              <NavLink to="/products">Products</NavLink>
          </div>
        </div>

        <NavLink to="/gallery">Gallery</NavLink>

        <div className="header-buttons">
          <a href="tel:+919666466660" className="call-btn">
            <FaPhoneAlt />
            <span>Call Now</span>
          </a>

          <button className="contact-btn">
            <NavLink to="/contact" className="nav-link">
              <FaPaperPlane />
              <span>Contact US</span>
            </NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;