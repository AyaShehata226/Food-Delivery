import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount ,isLoggedIn , setIsLoggedIn ,showLogin ,setShowLogin } = useContext(StoreContext);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => {
              setMenu("Home");
            }}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("Menu");
            }}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("Mobli-app");
            }}
            className={menu === "Mobli-app" ? "active" : ""}
          >
            Mobli-app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("Contact us");
            }}
            className={menu === "Contact us" ? "active" : ""}
          >
            Contact us
          </a>
        </ul>
        <div className="navbar-right"> 
          <img src={assets.search_icon} alt="search" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} />
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </Link>
          </div>
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              <AiOutlineUser className="userIcon"/>
              </button>
          ) : (
            <button onClick={() => setShowLogin(true)}>Sign in</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
