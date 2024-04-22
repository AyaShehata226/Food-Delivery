import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mulit-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="Street" />
        <div className="mulit-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>
        <div className="mulit-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone"/>
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
                  <p>${2}</p>
                </div>
                <hr/>
                <div className="cart-total-detalis">
                  <b>Total</b>
                  <p>${getTotalCartAmount()+2}</p>
                </div>
              </div>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO PAYMENT</button> 
          </div>
      </div>
    </div>
    </>
  );
};

export default PlaceOrder;
