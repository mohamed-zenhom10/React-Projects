import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products/Products';
import "./CategoryPage.css";

const CategoryPage = () => {

  const {cat} = useParams();
  const [categroyPro , setCategoryPro] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cat}`)
    .then((response) => response.json())
    .then((data) => {
      setCategoryPro(data.products);
    })
    .catch((error) => console.log(error));
  } , [cat]);

  return (
    <div className="category-page">
      <div className="container">
        <div className="products-page">
          {categroyPro.map((pro , index) => (
            <Products key={index} item={pro} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
