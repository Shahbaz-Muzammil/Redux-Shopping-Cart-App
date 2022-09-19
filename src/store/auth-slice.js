import { createSlice } from "@reduxjs/toolkit";



const authSlicer=createSlice({
    name :"auth",
    initialState:{ isLoggedIn:false},
    reducers:{
            logIn(state){
                state.isLoggedIn=true
            },
            logOut(state){
                state.isLoggedIn=false
            }
    }
})

export const authActions=authSlicer.actions
 

export default authSlicer
