import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlicer from "./auth-slice";
import { cartSlice } from "./cart-slice";
import uiSlice from "./ui-slice";



export const store =configureStore({
    reducer:{
        auth:authSlicer.reducer ,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    }
})

export default store