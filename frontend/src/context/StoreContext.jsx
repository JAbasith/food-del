import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = React.useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        //create new entry if this food id not available in 
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    //decrease value by one
    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(url+"/api/cart/remove", {itemId},{headers:{token}});
        }
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

<<<<<<< Updated upstream
=======
    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    //make add cart changes if the page is loaded
    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    //making not logout when page is refreshed
    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
            //if have token in local storag then set it token state
            if(localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

>>>>>>> Stashed changes
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