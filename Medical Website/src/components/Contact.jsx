import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="main-title">
          <h1>
            Reach our <span className="text-gradient">Help Desk</span> for
            support
          </h1>
          <p>
            Questions? Need assistance? Our dedicated support <br /> team is
            here to help you every step of the way:
          </p>
        </div>
        <div className="form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input">
              <FaUser />
              <input type="text"
                placeholder="Enter Your First Name"
              />
            </div>
            <div className="input">
              <MdEmail />
              <input type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <button>
              <span>Contact us</span>
              <span><TiArrowRight /></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
