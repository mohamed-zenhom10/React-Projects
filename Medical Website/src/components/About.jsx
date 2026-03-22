import React from "react";
import about from "../../public/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="content">
          <div className="main-title">
            <h1>
              <span className="text-gradient">HealNet’s Story:</span>
              Get to know us
            </h1>
          </div>
          <div className="about-content">
            <div className="img">
              <img src={about} alt="" />
            </div>
            <div className="text">
              <p>
                HealNet is more than just an online medical service; it’s a
                movement towards accessible, efficient, and compassionate
                healthcare for all. Founded by a team of visionary doctors,
                healthcare professionals, and technology experts, we are driven
                by the mission to deliver exceptional medical care directly to
                you, no matter where you are. Our platform is built on the
                pillars of trust, innovation, and patient-centricity, ensuring
                that every interaction is personalized and every treatment plan
                is tailored to your unique needs. With a network of licensed
                practitioners from diverse medical fields, we guarantee
                comprehensive care that’s just a click away.
              </p>
              <button className="main-btn">Learn more about us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
