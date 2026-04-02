import React from 'react'
import left_coffee from "../assets/left-coffee.png";
import right_coffee from "../assets/right-coffee.png";
import { FaEnvelope } from "react-icons/fa";


const Login = () => {
  return (
    <section className="bg-[#E2D9C8] flex justify-center xl:justify-between items-center py-20 xl:py-0">
      <img src={left_coffee} alt="coffee beans" className="hidden xl:block"/>
      <div className="text-center">
        <p className="text-[#30261C] font-semibold text-3xl">Join in and ger 15% off!</p>
        <p className="text-[#30261C] text-xl my-5">Subscribe to our newsletter in get 15% off discount code.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2.5">
          <div className="relative bg-white flex-1 h-14 rounded-full">
            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2"/>
            <input type="email" placeholder="Enter address" className="absolute w-full top-0 left-0 h-full outline-0 ps-10"/>
          </div>
          <button className="bg-[#30261C] text-white px-5 py-2.5 cursor-pointer rounded-full">Subscribe</button>
        </form>
      </div>
      <img src={right_coffee} alt="coffee beans" className="hidden xl:block"/>
    </section>
  )
}

export default Login
