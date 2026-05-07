import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./productDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import SlideProducts from "../../components/Products/SlideProducts";
import ProductDetailsLoading from "./ProductDetailsLoading";
import SlideProductLoading from "../../components/Products/SlideProductLoading";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { cartItems, addToCart , addToFavorites , favorite } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [realtedProducts, setRelatedProducts] = useState([]);
  const [realtedProductsLoading, setRealtedProductsLoading] = useState(true);
  const isInCart = cartItems.some((i) => i.id === product?.id);
  const isInFav = favorite.some((i) => i.id === product?.id);


  const handleAddToCart = () => {
    addToCart(product);
    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} className="toast-img" alt="" />
        <div className="content">
          <strong>{product.title}</strong> added to cart
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
      // eslint-disable-next-line no-undef
      removeFromFav(product.id);
      toast.error(
        // eslint-disable-next-line no-undef
        `${item.title} removed form favorites`
      )
    } else {
      addToFavorites(product);
      toast.success(
        `${product.title} added to favorites`
      )
    }
  }

  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getOneProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setRelatedProducts(data.products))
      .catch((error) => console.log(error))
      .finally(() => setRealtedProductsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.category]);

  if (loading) return <ProductDetailsLoading />;
  if (!product) return <p>Product Not Found...</p>;

  return (
    <div>

      <div className="item-details">

        <div className="container">
          
          <div className="img-item">
            
            <div className="big-img">
              <img id="big" src={product.images[0]} alt={product.title} />
            </div>
            <div className="small-imgs">
              {product.images.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt=""
                  onClick={() => {
                    document.getElementById("big").src = img;
                  }}
                />
              ))}
            </div>
          </div>

          <div className="details-item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p className="price">{product.price}</p>
            <h4>
              Availiabilty : <span>{product.availabilityStatus}</span>
            </h4>
            <h4>
              Brand : <span>{product.brand}</span>
            </h4>
            <p className="desc">{product.description}</p>
            <h4 className="stock">
              <span>
                Hurry Up! Only {product.stock} products left in stock.
              </span>
            </h4>
            <button type="button" className={`btn ${isInCart? "in-cart" : ""}`} onClick={handleAddToCart}>
              <strong>Add To Cart</strong> <FaShoppingCart />
            </button>
            <div className={`heart-icon ${isInFav ? "in-fav" : ""}`}>
              <FaHeart  onClick={handleAddToFavorites}/>
            </div>
          </div>

        </div>

      </div>


      {realtedProductsLoading ? (
        <SlideProductLoading />
      ) : (
        <SlideProducts title={product.category} data={realtedProducts} />
      )}
    </div>
  );
};

export default ProductDetails;
