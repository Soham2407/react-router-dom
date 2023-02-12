import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummery = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>Order confirmed!</h4>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default OrderSummery;
