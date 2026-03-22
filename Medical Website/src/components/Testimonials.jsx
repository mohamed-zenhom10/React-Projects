import React from "react";
import user_1 from "../../public/user-1.png";
import user_2 from "../../public/user-2.png";
import user_3 from "../../public/user-3.png";
import user_4 from "../../public/user-4.png";

const Testimonials = () => {
  return (
    <div className="testi">
      <div className="container">
        <div className="main-title">
          <h1>
            <span className="text-gradient">Patient Testimonials:</span>
            <br />
            Hear from Those We’ve Cared For
          </h1>
          <p>
            Discover the difference we make through the voices of those we’ve
            served:
          </p>
        </div>
        <div className="users-cards">
          <div className="user-card">
            <div className="img">
              <img src={user_1} alt="" />
            </div>
            <div className="text">
              <p>
                “After my knee surgery, the convenience of online consultations
                made my recovery smoother than I could have imagined.”
              </p>
              <h4>- Linda A.</h4>
            </div>
          </div>
          <div className="user-card">
            <div className="img">
              <img src={user_2} alt="" />
            </div>
            <div className="text">
              <p>
                “Managing chronic conditions like diabetes requires a lot of
                vigilance, but the medicine refill system has simplified my
                life.”
              </p>
              <h4>- Henry B.</h4>
            </div>
          </div>
          <div className="user-card">
            <div className="img">
              <img src={user_3} alt="" />
            </div>
            <div className="text">
              <p>
                “The prescription refill system is a game-changer for managing
                my diabetes. It’s really efficient and completely hassle-free.”
              </p>
              <h4>- Joshua T.</h4>
            </div>
          </div>
          <div className="user-card">
            <div className="img">
              <img src={user_4} alt="" />
            </div>
            <div className="text">
              <p>
                “Finding a doctor who really understands all of my health needs
                has never been easier. This platform has changed my life.”
              </p>
              <h4>- Samantha K.</h4>
            </div>
          </div>
        </div>
        <div className="testi-numbers">
          <div className="testi-number">
            <h2>
              10,000+
            </h2>
            <p>
              Successful Consultations
            </p>
          </div>
          <div className="testi-number">
            <h2>
              2,500+
            </h2>
            <p>
              Healthcare Professionals
            </p>
          </div>
          <div className="testi-number">
            <h2>
              98%
            </h2>
            <p>
              Patient Satisfaction Rate
            </p>
          </div>
          <div className="testi-number">
            <h2>
              200+
            </h2>
            <p>
              Top Specialists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
