import React ,{ createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const [cartItems , setCartItems] = useState({});
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev ,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev ,[itemId]:prev[itemId]+1}));
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    }
    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    useEffect(()=>{
        // console.log(cartItems)
    })
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;