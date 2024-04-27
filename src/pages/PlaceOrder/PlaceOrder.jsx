import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const PlaceOrder = () => {
  const {getTotalCartAmount ,isLoggedIn,setShowLogin} = useContext(StoreContext);
  const [userInfo , setUserInfo] = useState({});
  const navigate =useNavigate();
  const handleOnChange = (evt)=>{
    if(evt.target.name === "firstName"){
      setUserInfo({...userInfo, firstName:evt.target.value});
    }else if(evt.target.name === "lastName"){
      setUserInfo({...userInfo, lastName:evt.target.value});
    }else if(evt.target.name === "email"){
      setUserInfo({...userInfo, email:evt.target.value});
    }else if(evt.target.name === "city"){
      setUserInfo({...userInfo, city:evt.target.value});
    }else if(evt.target.name === "street"){
      setUserInfo({...userInfo, street:evt.target.value});
    }else if(evt.target.name === "phone"){
      setUserInfo({...userInfo, phone:evt.target.value});
    }
  }
  const handelOnSupmit =()=>{
    if(Object.keys(userInfo)<6){
      toast.error("Please Fill all fields")
    }else if(!isLoggedIn){
      toast.error("Please Login")
      setTimeout(() => {
        setShowLogin(true);
      }, 500);
    }else{
      navigate('/payment');
  }
  }
  useEffect(()=>{
  },[])
  return (
    <>
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mulit-fields">
          <input type="text" placeholder="First name" name="firstName" onChange={(e)=>{handleOnChange(e)}} />
          <input type="text" placeholder="Last name" name="lastName" onChange={(e)=>{handleOnChange(e)}} />
        </div>
        <input type="email" placeholder="Email address" name="email" onChange={(e)=>{handleOnChange(e)}}/>
        <div className="mulit-fields">
          <input type="text" placeholder="city" name="city" onChange={(e)=>{handleOnChange(e)}} />
          <input type="text" placeholder="Street" name="street" onChange={(e)=>{handleOnChange(e)}} />
        </div>
        <input type="text" placeholder="Phone" name="phone" onChange={(e)=>{handleOnChange(e)}}/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="">
                <div className="cart-total-detalis">
                  <p>Suptotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cart-total-detalis">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount()?2:0}</p>
                </div>
                <hr/>
                <div className="cart-total-detalis">
                  <b>Total</b>
                  <p>${getTotalCartAmount()?getTotalCartAmount()+2:0}</p>
                </div>
              </div>
            </div>
            <button onClick={handelOnSupmit}>PROCEED TO PAYMENT</button> 
          </div>
      </div>
      <Toaster/>
    </div>
    </>
  );
};

export default PlaceOrder;
