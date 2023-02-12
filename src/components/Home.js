import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>Home</h4>
      <button onClick={() => navigate("order-summary")}>Order</button>
    </>
  );
};

export default Home;
