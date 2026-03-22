import React, { useState } from "react";
import logo from "../../public/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>HealNet</h3>
      </div>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/find-doctor">Find Doctors</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <div className="join-btn">
        <button className="main-btn">Join Us</button>
      </div>
      <div className="toggler-button">
        <FaBars onClick={() => setMenu(!menu)} />
      </div>
      {/* Start Mobile Navbar */}
      <div className={`mobile-navbar ${menu ? "show" : ""}`}>
        <nav className="navbar mobile">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/find-doctor">Find Doctors</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="join-btn mobile">
          <button className="main-btn">Join Us</button>
        </div>
      </div>
      {/* End Mobile Navbar */}
    </div>
  );
};

export default Header;
