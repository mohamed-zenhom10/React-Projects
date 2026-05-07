import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const BottomHeader = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenCategories(false);
  }, [location]);

  return (
    <>
      <div className="bottom-header">
        <div className="container">
          <nav className="nav">
            <div className="category-nav">
              <div className="category-bottom">
                <FaBars onClick={() => setOpenCategories(!openCategories)} />
                <p>Browse Category</p>
                <IoMdArrowDropdown />
              </div>

              <div
                className={`category-nav-list ${openCategories ? "active" : ""}`}
              >
                {categories.map((category) => (
                  <Link key={category.name} to={`category/${category.slug}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className={`nav-links ${displayNav ? "display" : ""}`}>
              {navLinks.map((link) => (
                <Link
                  className={location.pathname === link.link ? "active" : ""}
                  key={link.title}
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </nav>

          <div className="bottom-header-icons">
            <FaSignInAlt />
            <FaUserPlus />
            <FaBars
              className="nav-bar-icon"
              onClick={() => setDisplayNav(!displayNav)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
