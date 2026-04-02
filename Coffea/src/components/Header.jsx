import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-3 duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex justify-between items-center h-16">
        <h1 className="text-4xl font-semibold text-white">Cofea</h1>
        <nav className="space-x-5 text-white hidden md:block">
          <Link to="/" className="uppercase font-medium">
            home
          </Link>
          <Link to="/coffee" className="uppercase font-medium">
            coffee
          </Link>
          <Link to="/bakery" className="uppercase font-medium">
            bakery
          </Link>
          <Link to="/shop" className="uppercase font-medium">
            shop
          </Link>
          <Link to="/about" className="uppercase font-medium">
            about
          </Link>
          <Link to="/login" className="uppercase font-medium">
            login
          </Link>
        </nav>
        <div className="flex gap-2.5">
          <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer">
            <IoSearch className="text-2xl" />
          </button>
          <button
            className=" w-10 h-10 rounded-full bg-white flex justify-center items-center cursor-pointer md:hidden"
            onClick={() => setMenu(!menu)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
        {/* Mobile Navbar */}

        <nav
          className={`space-x-5 text-[#30261C] bg-white flex flex-col gap-5 items-center w-100 max-w-full rounded-3xl py-5 md:hidden absolute top-full left-1/2 duration-200 z-50 ${menu ? "-translate-x-200" : "-translate-x-1/2"} `}
        >
          <Link to="/" className="uppercase font-medium">
            home
          </Link>
          <Link to="/coffee" className="uppercase font-medium">
            coffee
          </Link>
          <Link to="/bakery" className="uppercase font-medium">
            bakery
          </Link>
          <Link to="/shop" className="uppercase font-medium">
            shop
          </Link>
          <Link to="/about" className="uppercase font-medium">
            about
          </Link>
          <Link to="/login" className="uppercase font-medium">
            login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
