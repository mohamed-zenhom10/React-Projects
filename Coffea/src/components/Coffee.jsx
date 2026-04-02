import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import {coffee_section} from "../data/data";

const Coffee = () => {
  return (
    <section className="py-20 bg-[#E2D9C8]">
      <div className="container mx-auto">
        <h2 className="uppercase text-[#30261C] text-3xl text-center font-semibold">
          our special coffee
        </h2>
        <div className="mt-14 flex items-center justify-around">
          <button className="bg-[#E2D9C8] w-12 h-12 hidden justify-center items-center rounded-full cursor-pointer group md:flex">
            <FaArrowLeft className="group-hover:-translate-x-1.5 duration-200"/>
          </button>
          <div className="flex gap-2.5 flex-wrap justify-center">
            {coffee_section.map((item , index) => (
              <div key={index} className="bg-[#E2D9C8] p-2.5 rounded-2xl w-75">
                <div className="img flex justify-center">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="mt-5">
                  <p className="text[#30261C] text-3xl mb-2.5 font-semibold">{item.title}</p>
                  <p className="text-sm my-2.5 text-[#2A0000]">{item.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2A0000] font-medium text-lg">{item.rs}</span>
                    <button className="px-4 py-1.5 bg-[#2A0000] text-white rounded-lg border border-[#2A0000] cursor-pointer hover:bg-transparent hover:text-black">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="cursor-pointer bg-[#E2D9C8] w-12 h-12 hidden justify-center items-center rounded-full group md:flex">
            <FaArrowRight className="group-hover:translate-x-1.5 duration-200"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Coffee
