import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import CreateProduct from "./components/CreateProduct";
import SearchProduct from "./components/SearchProduct";
import Products from "./components/Products";
import Update from "./components/Update";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const [isUpdating, setIsUpdating] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    tax: "",
    ads: "",
    discount: "",
    category: "",
    count: "",
  });

  const [updateInputs, setUpdateInputs] = useState({
    title: "",
    price: "",
    tax: "",
    ads: "",
    discount: "",
    category: "",
  });

  const getTotal = () => {
    let total =
      Number(inputs.price) +
      Number(inputs.ads) +
      Number(inputs.tax) -
      Number(inputs.discount);
    return total;
  };

  const addNewProduct = () => {
    if (
      inputs.title == "" ||
      inputs.price == "" ||
      inputs.tax == "" ||
      inputs.category == ""
    ) {
      alert("Please enter required fields!");
      return;
    }

    let newProduct = {
      id: Date.now(),
      title: inputs.title,
      price: inputs.price,
      tax: inputs.tax,
      ads: inputs.ads,
      discount: inputs.discount,
      category: inputs.category,
      count: inputs.count,
      total: getTotal(),
    };

    if (Number(inputs.count) == 1) {
      setProducts((prev) => [...prev, newProduct]);
    } else {
      for (let i = 0; i < Number(inputs.count); i++) {
        setProducts((prev) => [...prev, newProduct]);
      }
    }
    setInputs({
      title: "",
      price: "",
      tax: "",
      ads: "",
      discount: "",
      category: "",
      count: "",
    });
  };

  const handleDeleteProducts = (id) => {
    const confirmMsg = confirm("Are Your Sure!");
    if (confirmMsg) {
      setProducts(products.filter((product) => product.id != id));
    }
  };

  const openUpdate = (product) => {
    setIsUpdating(true);
    setCurrentProductId(product.id);

    setUpdateInputs({
      title: product.title,
      price: product.price,
      tax: product.tax,
      ads: product.ads,
      discount: product.discount,
      category: product.category,
    });
  };

  const handleUpdateProduct = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === currentProductId
          ? {
              ...product,
              ...updateInputs,
              total:
                Number(updateInputs.price) +
                Number(updateInputs.tax) +
                Number(updateInputs.ads) -
                Number(updateInputs.discount),
            }
          : product,
      ),
    );

    setIsUpdating(false);
    setUpdateInputs({
      title: "",
      price: "",
      tax: "",
      ads: "",
      discount: "",
      category: "",
    });
  };

  return (
    <div>
      <Title />
      <CreateProduct
        inputs={inputs}
        setInputs={setInputs}
        addNewProduct={addNewProduct}
        getTotal={getTotal}
      />
      <SearchProduct
        search={search}
        setSearch={setSearch}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <Products
        products={products}
        search={search}
        searchCategory={searchCategory}
        handleDeleteProducts={handleDeleteProducts}
        openUpdate={openUpdate}
      />
      {isUpdating && (
        <Update
          updateInputs={updateInputs}
          setUpdateInputs={setUpdateInputs}
          handleUpdateProduct={handleUpdateProduct}
        />
      )}
    </div>
  );
};

export default App;
