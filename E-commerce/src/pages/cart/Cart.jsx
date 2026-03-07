import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../components/context/CartContext";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { cartItems , increaseQuantity , decreaseQuantity , removeItem} = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(3);



  return (
    <div className="cart">
      <div className="orders-summary">
        <h1>Orders Summary</h1>
        <div className="items">
          {cartItems.length === 0 ? (
            <p style={{textAlign: "center" , fontSize: "20px" , marginTop: "20px"}}>Your Cart Is Empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="item-card">
                <div className="img-container">
                  <img src={item.images[0]} alt="item image" />
                  <div className="item-content">
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price</strong> {item.price}
                    </p>
                    <div className="item-actions">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                </div>
                <div className="delete-icon" onClick={() => removeItem(item.id)}>
                  <FaTrash />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="summary">
          <div className="shop-table">
            <p>Total</p>
            <span className="total">${totalAmount}</span>
          </div>
        </div>
        <div className="order-button">
          <button type="button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
