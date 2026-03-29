import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./../App.css";
import Data from "../pages/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useContext(Data)

  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/product">Product</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      {isLoggedIn ? (
        <li>
          <button
            onClick={logout}
            style={{ background: "none", border: "none", color: "deeppink", cursor: "pointer" }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
        </>
      )}
      <li><NavLink to="/cart"><FiShoppingCart /></NavLink></li>
    </ul>
  )
}

export default Header
