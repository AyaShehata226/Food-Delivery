import React, { useContext, useEffect, useState } from "react";
import "./Payment.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { StoreContext } from "../../context/StoreContext";
const Payment = () => {
  const [information, setInformation] = useState({});
  const {isLoggedIn , setShowLogin , setCartItems , cartItems ,clearCart} = useContext(StoreContext);
  const navigate = useNavigate();
//   const confirmation = () => {
//     if (Object.keys(information).length < 5) {
//       toast.error("Please fill all fields");
//     }else if(information.cardNumber!==14){
//         toast.error("please enter 14 digits in card number");
//     }
//      else {
//       Swal.fire({
//         title: "Payment Done!",
//         text: "You Clicked the button",
//         icon: "success",
//       });
//       navigate("/");
//     }
//   };
const confirmation = () => {
    if (Object.keys(information).length < 5) {
      toast.error("Please fill all fields");
    } else if (information.cardNumber && ![16, 19].includes(information.cardNumber.length)) {
      toast.error("Please enter 16 digits in card number");
    } else if (!information.fullName || information.fullName.split(" ").length <2) {
      toast.error("Please enter both first and last name in Cardholder Name");
    } else if (!isValidExpireDate(information.expireDate)) {
      toast.error("Please enter a valid expiry date (MM / YY)");
    } else if (!information.CVC || !/^\d{3}$/.test(information.CVC)) {
      toast.error("Please enter a 3-digit CVC number");
    } else { 
      if(isLoggedIn){
        Swal.fire({
            title: "Payment Done!",
            text: "You Clicked the button",
            icon: "success",
          });
          clearCart()
          navigate("/");
      }else{
        setShowLogin(true);
        console.log("login");
      }
    }
  };
  
  const isValidExpireDate = (expireDate) => {
    const [month, year] = expireDate.split("/");
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    return /^\d{2}$/.test(month) && /^\d{2}$/.test(year) && parseInt(month) <= 12 && parseInt(year) >= currentYear;
  };

const handleOnChange = (e) => {
    if (e.target.name === "email") {
      setInformation({ ...information, email: e.target.value });
    } else if (e.target.name === "cardNumber") {
      setInformation({ ...information, cardNumber: e.target.value });
    } else if (e.target.name === "expireDate") {
      setInformation({ ...information, expireDate: e.target.value });
    } else if (e.target.name === "CVC") {
      setInformation({ ...information, CVC: e.target.value });
    } else if (e.target.name === "fullName") {
      setInformation({ ...information, fullName: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(()=>{
  },[])
  return (
    <form className="parent" onSubmit={handleOnSubmit}>
      <div className="pay">
        <h2>Pay with card</h2>
        <div>
          <div className="pay-email">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail address"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div className="pay-card">
            <label>Card information</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="3000 4000 2000 1000"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            <div className="pay-card-info">
              <input
                type="text"
                name="expireDate"
                placeholder="MM / YY"
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
              <input
                type="text"
                name="CVC"
                placeholder="CVC"
                onChange={(e) => {
                  handleOnChange(e);
                }}
              />
            </div>
          </div>
          <div className="pay-card-name">
            <label>Cardholder Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name on card"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </div>
          <div className="pay-button">
            <button type="submit" onClick={confirmation}>
              Pay
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </form>
  );
};

export default Payment;
