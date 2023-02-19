import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = localStorage.getItem("isLogin");

  const loginHandler = () => {
    localStorage.setItem("isLogin", true);
    navigate("/");
  };

  useEffect(() => {
    if (JSON.parse(login)) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h2>Login</h2>
      <input type="text" />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
