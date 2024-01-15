import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}>
      <span className="logo">Store</span>
      <div>
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link className="navlink" to={"/cart"}>
          Cart
        </Link>
        <span className="cartCount">Cart items:0</span>
      </div>
    </div>
  );
};

export default Navbar;
