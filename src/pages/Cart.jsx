import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

const cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((item) => (
          <div className="cartCard">
            <img src={item.image} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleAdd(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cart;
