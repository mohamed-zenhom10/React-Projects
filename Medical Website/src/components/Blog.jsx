import React from "react";
import blog from "../../public/blog.png";
import medic from "../../public/medic.png";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="main-title">
          <h1>
            How <span className="text-gradient">our platform</span> works
          </h1>
          <p>
            Navigating your healthcare journey with HealNet is seamless. Just
            follow these steps mentioned <br /> below to proceed with your selected
            services. You can also see our FAQ section for more guidance:
          </p>
        </div>
        <div className="blog-content">
          <div className="steps">
            <div className="step">
              <div className="number">
                1
              </div>
              <div className="text">
                <h4>Create Your Profile</h4>
                <p>
                  Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="number">
                2
              </div>
              <div className="text">
                <h4>Choose Your Service</h4>
                <p>
                  Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="number">
                3
              </div>
              <div className="text">
                <h4>Meet Your Doctor</h4>
                <p>
                  Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.
                </p>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={blog} alt="" />
            <img src={medic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
