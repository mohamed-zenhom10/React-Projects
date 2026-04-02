import React from "react";
import home_bg from "../assets/home-bg.png";
const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-contain"
      style={{ background: `url(${home_bg})` }}
    >
      <div className="container mx-auto min-h-screen flex items-center justify-center md:justify-start px-5 md:px-0">
        <div className="text-white text-center md:text-start">
          <p className="uppercase font-semibold text-3xl md:text-lg">Welcome</p>
          <h1 className="text-4xl md:text-7xl md:max-w-112.5 my-10 leading-[1.3] font-bold">
            We serve the richest coffee in the city!
          </h1>
          <p className="md:max-w-112.5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>
          <button 
            className="mt-10 bg-white text-black cursor-pointer px-5 py-2.5 
            text-xl rounded-3xl border hover:border-white hover:bg-transparent hover:text-white"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
