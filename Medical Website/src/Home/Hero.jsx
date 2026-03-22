import React from "react";
import home from "../../public/home.png";
import home_frame from "../../public/home-frame.png";
import line from "../../public/line.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import amazon from "../../public/ri_amazon-fill.png";
import apple from "../../public/ic_baseline-apple.png";
import google from "../../public/uim_google.png";
import notion from "../../public/cib_notion.png";
import spotify from "../../public/mdi_spotify.png";
import slack from "../../public/mdi_slack.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Your <span className="text-gradient">trusted partner</span> <br /> in digital healthcare.
          </h1>
          <p>
            <span className="wrapped-text">
              Empowering Your Health at Every Step
            </span>
            . Experience personalized medical care from the comfort of your
            home. Connect with{" "}
            <span className="wrapped-text">certified doctors</span>, or manage
            prescriptions, and schedule appointments with ease. Ready to take
            control of your health?{" "}
            <span className="wrapped-text">Get Started</span> or Book an
            Appointment today.
          </p>
          <button className="main-btn">
            Book an appoinment
            <MdOutlineKeyboardArrowRight />
          </button>
          <div className="icons">
            <p>Trusted by millions across the globe:</p>
            <div>
              <img src={amazon} alt="amazon" />
              <img src={apple} alt="apple" />
              <img src={google} alt="google" />
              <img src={notion} alt="notion" />
              <img src={spotify} alt="spotify" />
              <img src={slack} alt="slack" />
            </div>
          </div>
        </div>
        <div className="img">
          <img src={home} alt="home" />
          <img className="frame" src={home_frame} alt="" />
          <img className="line" src={line} alt="" />
          <div className="qoute">
            <p>
              Lorem ipsum dolor sit amet, ligula ego. consectetuer adipiscing
              elit doloras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
