import React from 'react'
import './Cart.css'
import { useCallback } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const {cardItems, food_list, removeFromCart} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
