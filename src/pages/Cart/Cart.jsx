import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import toast, { Toaster } from "react-hot-toast";
const Cart = () => {
  const { cartItems, food_list, removeFromCart ,  getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const handleOnSubmit =()=>{
    if(Object.keys(cartItems).length === 0){
      toast.error("cart Items is empty");
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }else{
      navigate('/order')
    }
  }
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="remove"
                    >
                      <HiMiniXMark className="icon"/>
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
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
            <button onClick={handleOnSubmit}>PROCEED TO CHECKOUT</button> 
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo Code"/>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  );
};

export default Cart;
