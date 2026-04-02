import React from "react";
import hand from "../assets/hand.png";
import coffee_img from "../assets/coffee-img.png";
import { RxDoubleArrowRight } from "react-icons/rx";

const Shop = () => {
  return (
    <section className="bg-[#E2D9C8] pb-5 md:pb-0">
      <div className="flex justify-between">
        <div className="hidden gap-20 lg:flex">
          <img src={hand} alt="coffee" />
          <div className="mt-20">
            <h3 className="text-3xl font-bold">
              Check Out Our Best <br /> Coffee Beans
            </h3>
            <button className="mt-5 flex items-center gap-2.5 bg-[#30261C] px-5 py-2.5 rounded-full cursor-pointer text-white group">
              Explore Out Products <RxDoubleArrowRight className="group-hover:translate-x-1.5 duration-150"/>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={coffee_img} alt="coffee beans" />
        </div>
      </div>
      {/* Mobile Section */}
      <div className="mt-20 flex flex-col justify-center items-center lg:hidden">
            <h3 className="text-3xl font-bold">
              Check Out Our Best <br /> Coffee Beans
            </h3>
            <button className="mt-5 flex items-center gap-2.5 bg-[#30261C] px-5 py-2.5 rounded-full cursor-pointer text-white group">
              Explore Out Products <RxDoubleArrowRight className="group-hover:translate-x-1.5 duration-150"/>
            </button>
          </div>
    </section>
  );
};

export default Shop;
