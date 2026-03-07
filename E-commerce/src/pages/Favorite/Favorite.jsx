import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";

const Favorite = () => {
  const { favorite , removeFromFav } = useContext(CartContext);
  return (
    <div className="cart">
      <div className="orders-summary">
        <h1>Favorite Summary</h1>
        <div className="items">
          {favorite.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              Your Favorite List Is Empty
            </p>
          ) : (
            favorite.map((item, index) => (
              <div key={index} className="item-card">
                <div className="img-container">
                  <img src={item.images[0]} alt="item image" />
                  <div className="item-content">
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Price</strong> {item.price}
                    </p>
                  </div>
                </div>
                <div
                  className="delete-icon"
                  onClick={() => removeFromFav(item.id)}
                >
                  <FaTrash />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
