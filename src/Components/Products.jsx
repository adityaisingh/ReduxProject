import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const API = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const data = await fetch(API);
    const json = await data.json();
    console.log(json);
    setItems(json);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="productsWrapper">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="" />
          <h4>{item.title}</h4>
          <h4>{item.price}</h4>
          <button onClick={() => handleAdd(item)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
