import React from "react";
import logo from "../../public/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="upper-footer">
          <div className="column">
            <img src={logo} alt="" />
            <h3>HealNet</h3>
            <p>
              Experience personalized medical <br />
              care from the comfort of your home.
            </p>
          </div>
          <div className="column">
            <h5>Support</h5>
            <p>Getting Started</p>
            <p>FAQS</p>
            <p>Help Articles</p>
            <p>Report an issue</p>
            <p>Contact Help Desk</p>
          </div>
          <div className="column">
            <h5>Services</h5>
            <p>Booking appointments</p>
            <p>Online consultations</p>
            <p>Prescriptions</p>
            <p>Medicine Refills</p>
            <p>Medical Notes</p>
          </div>
          <div className="column">
            <h5>Legal</h5>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Notice</p>
            <p>Cookie Preferences</p>
            <p>Trust Center</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="down-footer">
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <p>HealNet 2024 © All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
