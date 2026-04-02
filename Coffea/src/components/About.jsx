import React from "react";
import user from "../assets/user.png";
import { FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-5 lg:px-0">
      <div className="container mx-auto">
        <h2 className="text-[#30261C] text-4xl font-semibold text-center uppercase">
          our happy customers
        </h2>
        <div className="mt-10 flex items-center gap-10 justify-center flex-col lg:flex-row">
          <div className="w-125 max-w-full bg-[#E2D9C8] p-5 rounded-3xl">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center gap-5">
                <img src={user} alt="customer img" />
                <div>
                  <p className="text-[#30261C] text-2xl font-semibold">James Smith</p>
                  <p className="text-[#30261C] text-xl"> Entrepreneur</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-[#FFB921]">
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
              </div>
            </div>
            <p className="mt-5 text-[#30261C]">
              Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum
              dolor sit amet, consectetur adipisicing dolor sit amet,
              consectetur adipisicing elit,Lorem ipsum amet, consectetur
              adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem
              ipsum dolor sit dolor sit amet, consectetur adipisicing elit,
            </p>
          </div>
          <div className="w-125 max-w-full bg-[#E2D9C8] p-5 rounded-3xl">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center gap-5">
                <img src={user} alt="customer img" />
                <div>
                  <p className="text-[#30261C] text-2xl font-semibold">James Smith</p>
                  <p className="text-[#30261C] text-xl"> Entrepreneur</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-[#FFB921]">
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
              </div>
            </div>
            <p className="mt-5 text-[#30261C]">
              Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum
              dolor sit amet, consectetur adipisicing dolor sit amet,
              consectetur adipisicing elit,Lorem ipsum amet, consectetur
              adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem
              ipsum dolor sit dolor sit amet, consectetur adipisicing elit,
            </p>
          </div>
          <div className="w-125 max-w-full bg-[#E2D9C8] p-5 rounded-3xl">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center gap-5">
                <img src={user} alt="customer img" />
                <div>
                  <p className="text-[#30261C] text-2xl font-semibold">James Smith</p>
                  <p className="text-[#30261C] text-xl"> Entrepreneur</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-[#FFB921]">
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
                <FaStar className="text-2xl"/>
              </div>
            </div>
            <p className="mt-5 text-[#30261C]">
              Lorem ipsum dolor sit amet, consectetur adipisicing ,Lorem ipsum
              dolor sit amet, consectetur adipisicing dolor sit amet,
              consectetur adipisicing elit,Lorem ipsum amet, consectetur
              adipisicing elit,Lorem ipsum dolor sit adipisicing elit,Lorem
              ipsum dolor sit dolor sit amet, consectetur adipisicing elit,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
