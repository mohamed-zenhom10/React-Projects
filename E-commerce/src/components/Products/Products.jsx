import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const Products = ({ item }) => {
  const { cartItems, addToCart , favorite , addToFavorites , removeFromFav } = useContext(CartContext);
  
  const isInCart = cartItems.some((i) => i.id === item.id);
  const isInFav = favorite.some((i) => i.id === item.id);

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} className="toast-img" alt="" />
        <div className="content">
          <strong>{item.title}</strong> added to cart
          <div>
            <Link to="/cart">
              <button className="btn">View Cart</button>
            </Link>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  const handleAddToFavorites = () => {
    if(isInFav) {
      removeFromFav(item.id);
      toast.error(
        `${item.title} removed form favorites`
      )
    } else {
      addToFavorites(item);
      toast.success(
        `${item.title} added to favorites`
      )
    }
  }



  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`products/${item.id}`}>
        <span className="check-status">
          <FaCheck /> in cart
        </span>

        <div className="img">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
        <div className="price">$ {item.price}</div>
      </Link>
      <div className="actions">
        <span>
          <FaShoppingCart onClick={handleAddToCart} />
        </span>
        <span className={`${isInFav ? "in-fav" : ""}`}>
          <FaHeart onClick={handleAddToFavorites} />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default Products;
