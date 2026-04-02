import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#30261C]'>
      <div className="container mx-auto py-14 text-white flex justify-between flex-wrap gap-10 flex-col items-center md:items-start md:flex-row">
        <h1 className='text-3xl'>Coffee</h1>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl'>PRIVACY</h3>
          <p className='cursor-pointer hover:underline'>Terms of use</p>
          <p className='cursor-pointer hover:underline'>Privacy policy</p>
          <p className='cursor-pointer hover:underline'>Cookies</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl'>SERVICES</h3>
          <p className='cursor-pointer hover:underline'>Shop</p>
          <p className='cursor-pointer hover:underline'>Order ahead</p>
          <p className='cursor-pointer hover:underline'>Menu</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl'>ABOUT US</h3>
          <p className='cursor-pointer hover:underline'>Find a location</p>
          <p className='cursor-pointer hover:underline'>About us</p>
          <p className='cursor-pointer hover:underline'>Out story</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h3 className='text-2xl'>INFOTNATION</h3>
          <p className='cursor-pointer hover:underline'>Plons & pricing</p>
          <p className='cursor-pointer hover:underline'>Sell your prodcts</p>
          <p className='cursor-pointer hover:underline'>Jobs</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h3>SOCIAL MEDIA</h3>
          <div className='flex gap-3'>
            <BsTwitterX className='text-xl cursor-pointer'/>
            <FaInstagram className='text-xl cursor-pointer'/>
            <FaFacebookF className='text-xl cursor-pointer'/>
            <FaLinkedinIn className='text-xl cursor-pointer'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
