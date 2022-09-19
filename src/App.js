import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-action";
import { uiActions } from "./store/ui-slice";
let isFirstRender=true;
function App() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  const cartItems=useSelector((state)=>state.cart)
  const notification=useSelector((state)=>state.ui.notification)
const dispatch=useDispatch()
useEffect(()=>{
dispatch(fetchData())
},[dispatch])
  useEffect(()=>{
    if(isFirstRender){
      isFirstRender=false;
    }
    if (cartItems.changed) {
      dispatch(sendCartData(cartItems));
    }
  

  },[cartItems,dispatch])
 
    return (
    <div className="App">
     { notification && <Notification type={notification.type} message={notification.message}/>}
       {!isLoggedIn && <Auth />}
       {isLoggedIn&& <Layout />}
    </div>   
  );
}

export default App;
