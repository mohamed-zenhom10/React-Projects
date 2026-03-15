import React, { useState } from "react";
import Update from "./Update";

const Products = ({products , search , searchCategory , handleDeleteProducts , openUpdate }) => {

  return (
    <div className="container">
      <div className="products">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Ads</th>
              <th>Discount</th>
              <th>Total</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products
            .filter((product) => (            
              searchCategory === "title" ? product.title.toLowerCase().includes(search.toLowerCase()) : 
                                            product.category.toLowerCase().includes(search.toLowerCase())
            ))
            .map((product , index) => (
              <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>{product.tax}</td>
              <td>{product.ads}</td>
              <td>{product.discount}</td>
              <td>{product.total}</td>
              <td>{product.category}</td>
              <td><button onClick={() => openUpdate(product)} className="update">Update</button></td>
              <td><button onClick={() => handleDeleteProducts(product.id)} className="delete">Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
