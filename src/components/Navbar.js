import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const login = JSON.parse(localStorage.getItem("isLogin"));
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const signoutHandler = () => {
    localStorage.setItem("isLogin", false);
    setShowLogin(false);
  };

  useEffect(() => {
    if (login) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
      navigate("/login");
    }
  }, [login]);
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
      {showLogin ? (
        <Link onClick={signoutHandler}>Signout</Link>
      ) : (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
