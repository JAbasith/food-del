import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = React.useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");

    const addToCart = (itemId) => {
        //create new entry if this food id not available in 
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    //decrease value by one
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }

        }
        return totalAmount;
    }

    //making not logout when page is refreshed
    useEffect(()=>{

        //if have token in local storag then set it token state
        if(localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;