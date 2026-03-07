import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../components/Products/Products";
import "./Search.css";
import SlideProductLoading from "../../components/Products/SlideProductLoading";

const Search = () => {
  const query = new URLSearchParams(useLocation().search).get("query");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => setSearchedProduct(data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="searched-products">
      {loading ? (
        <SlideProductLoading key={query} />
      ) : searchedProduct.length > 0 ? (
        <div className="container">
          <h3>Results for : {query.replace("-", " ")}</h3>
          <h1>Number Of Products : {searchedProduct.length}</h1>
          <div className="searched">
            {searchedProduct.map((item, index) => (
              <Products item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <p
            style={{ textAlign: "center", marginTop: "30px", fontSize: "22px" }}
          >
            No Results Found For This Product
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
