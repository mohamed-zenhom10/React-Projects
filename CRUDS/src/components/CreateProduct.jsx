import React, { useEffect, useState } from "react";

const CreateProduct = ({ inputs, setInputs, addNewProduct , getTotal }) => {

  const [total , setTotal] = useState();

  useEffect(() => {
    setTotal(getTotal())
  } , [inputs])

  return (
    <div className="container">
      <div className="create-product">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="pro-title">
            <input
              type="text"
              placeholder="Enter Product Title *"
              value={inputs.title}
              onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            />
          </div>
          <div className="pro-price">
            <input
              type="number"
              placeholder="Enter Product Price *"
              value={inputs.price}
              onChange={(e) => setInputs({...inputs , price: e.target.value})}
            />
            <input
              type="number"
              placeholder="Enter Product Tax *"
              value={inputs.tax}
              onChange={(e) => setInputs({...inputs , tax:e.target.value})}
            />
            <input
              type="number"
              placeholder="Enter Product Ads"
              value={inputs.ads}
              onChange={(e) => setInputs({...inputs , ads: e.target.value})}
            />
            <input
              type="number"
              placeholder="Enter Product Discount"
              value={inputs.discount}
              onChange={(e) => setInputs({...inputs , discount: e.target.value})}
            />
            <span>
              <span>Total</span> : <span>{total}</span>
            </span>
          </div>
          <div className="pro-data">
            <input
              type="text"
              placeholder="Enter Product Category *"
              value={inputs.category}
              onChange={(e) => setInputs({...inputs , category: e.target.value})}
            />
            <input
              type="number"
              placeholder="Enter Product Count"
              value={inputs.count}
              onChange={(e) => setInputs({...inputs , count: e.target.value})}
            />
          </div>
          <button onClick={addNewProduct}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
