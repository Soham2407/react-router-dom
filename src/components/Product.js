import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div style={{ margin: "10px 0px" }}>
        <input type="text" placeholder="Search product" />
      </div>
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Product;
