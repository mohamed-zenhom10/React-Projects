import React from "react";
import "./About.css";
import about_img from "../../imgs/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1> About Us</h1>

        <p>
          Welcome to our store — your destination for quality products, modern
          style, and a smooth shopping experience. We created this eCommerce
          platform to make online shopping easier, faster, and more reliable for
          everyone. Our goal is to provide carefully selected products at
          competitive prices while delivering excellent customer service and a
          seamless user experience. From the latest trends to everyday
          essentials, we focus on offering products that combine quality, value,
          and convenience. We believe shopping should be simple and enjoyable,
          which is why we continuously work on improving our platform, adding
          new products, and ensuring secure and fast delivery. Thank you for
          choosing us and being part of our journey.
        </p>
        <img className="about-img" src={about_img} alt="about" />
      </div>
    </div>
  );
};

export default About;
