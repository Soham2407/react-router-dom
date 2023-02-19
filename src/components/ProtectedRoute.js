import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const login = JSON.parse(localStorage.getItem("isLogin"));

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);
  return <div>{children}</div>;
};

export default ProtectedRoute;
