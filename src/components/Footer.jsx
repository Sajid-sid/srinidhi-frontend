import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn, 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h2>Srinidhi Comfort Solution</h2>

          <p>
            We provide professional AC Sales, Installation, Repair,
            Maintenance, AMC Services, and HVAC solutions for
            Residential, Commercial, and Industrial customers.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <ul>
            <li>AC Installation</li>
            <li>AC Repair</li>
            <li>AMC Services</li>
            <li>Central Air Conditioning</li>
            <li>HVAC Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Hyderabad, Telangana
          </p>

          <p>
            <FaPhoneAlt />
            +91 96664 66660
          </p>

          <p>
            <FaEnvelope />
            info@srinidhicomfortsolution.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Srinidhi Comfort Solution.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;