import React from "react";

const Update = ({ updateInputs, setUpdateInputs , handleUpdateProduct }) => {
  return (
    <div className="container">
      <div className="update-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter Product Title *"
            value={updateInputs.title}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, title: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Product Price *"
            value={updateInputs.price}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, price: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Product Tax *"
            value={updateInputs.tax}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, tax: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Product Ads"
            value={updateInputs.ads}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, ads: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Enter Product Discount"
            value={updateInputs.discount}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, discount: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Product Category *"
            value={updateInputs.category}
            onChange={(e) =>
              setUpdateInputs({ ...updateInputs, category: e.target.value })
            }
          />
          <button onClick={handleUpdateProduct}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
