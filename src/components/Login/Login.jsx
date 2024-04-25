import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { json, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { StoreContext } from "../../context/StoreContext";
const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const {isLoggedIn , setIsLoggedIn ,setShowLogin} = useContext(StoreContext);
  const handelOnChange = (evt) => {
    if (evt.target.name === "name") {
      setCurrentUser({ ...currentUser, name: evt.target.value });
    } else if (evt.target.name === "email") {
      setCurrentUser({ ...currentUser, email: evt.target.value });
    } else if (evt.target.name === "password") {
      setCurrentUser({ ...currentUser, password: evt.target.value });
    }
  };
  const handleSignup = () => {
    if (Object.keys(currentUser).length < 3) {
      toast.error("Fill in all input fields");
    } else if (!isChecked) {
      toast.error("Please agree to the terms of use & privacy policy");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...existingUsers, currentUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      console.log("User signed up:", currentUser);
      setCurrentState("Login");
      setShowLogin(true);
    }
  };
  const handelLogin = () => {
    const sotredUser = JSON.parse(localStorage.getItem("users")) || [];
    // console.log("users", sotredUser);
    const user = sotredUser.find(
      (u) =>
        u.email === currentUser.email && u.password === currentUser.password
    );
    if (user) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      toast.success("Successfully Login");
      setTimeout(() => {
        setShowLogin(false);
      }, 500);
    } else {
      toast.error("E-mail and password Invalid!");
    }
  };
  const handelOnSupmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <form className="login-container " onSubmit={handelOnSupmit}>
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              onChange={(e) => handelOnChange(e)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Your E-mail"
            name="email"
            onChange={(e) => handelOnChange(e)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handelOnChange(e)}
            required
          />
        </div>
        {currentState === "Sing UP" ? (
          <button type="submit" onClick={handleSignup}>
            Sign Up
          </button>
        ) : (
          <button onClick={handelLogin} type="submit">
            Login
          </button>
        )}
        {currentState === "Sing UP" ? (
          <div className="login-condition">
            <input
              type="checkbox"
              required
              name="checkbox"
              onChange={() => setIsChecked(!isChecked)}
              checked={isChecked}
            />
            <p>By continuing , i agree to the terms of use & Privacy policy.</p>
          </div>
        ) : (
          <></>
        )}
        {currentState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sing UP")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default Login;
