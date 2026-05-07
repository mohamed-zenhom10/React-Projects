import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { CartContext } from "../context/CartContext";

const TopHeader = () => {
  const { cartItems, favorite } = useContext(CartContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [suggesion, setSuggestion] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);

  const handleSubmite = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?query=${encodeURIComponent(input.trim())}`);
    }
    setInput("");
    setSuggestion([]);
  };

  useEffect(() => {
    const fetchSuggesion = async () => {
      if (!input.trim()) {
        setSuggestion([]);
        return;
      }
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${input}`,
        );
        const data = await response.json();
        setSuggestion(data.products.slice(0, 5) || []);
      } catch (error) {
        console.log(error);
        setSuggestion([]);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggesion();
    }, 300);
    return () => clearTimeout(debounce);
  }, [input]);

  return (
    <>
      <div className="top-header">
        <div className="container">
          <Link to="/">E-Commerce</Link>

          <form
            className={`search-box ${displaySearch ? "display" : ""}`}
            onSubmit={handleSubmite}
          >
            <input
              type="text"
              placeholder="search for products"
              name="serach"
              id="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
            {input.trim() ? (
              <div className="suggestion">
                {suggesion.map((item) => (
                  <div className="sugg" key={item.id}>
                    <li>{item.title}</li>
                    <img src={item.images[0]} alt="" />
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </form>

          <div className="header-icons">
            <div className="icon">
              <Link to="/favorite">
                <FaRegHeart />
                <span className="count">{favorite.length}</span>
              </Link>
            </div>
            <div className="icon">
              <Link to="/cart">
                <FaShoppingCart />
                <span className="count">{cartItems.length}</span>
              </Link>
            </div>
            <div
              className="icon"
              onClick={() => setDisplaySearch(!displaySearch)}
            >
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
