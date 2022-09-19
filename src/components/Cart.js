import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity=useSelector((state)=>state.cart.totalQuantity)
  const dispatch=useDispatch()
  const cartQuantity = `${quantity}`;
  const showCart=()=>{
    dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {cartQuantity} Items</h3>
    </div>
  );
};

export default Cart;
