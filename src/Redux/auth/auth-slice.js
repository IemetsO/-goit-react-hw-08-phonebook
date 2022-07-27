import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";


const initialState = {
    user: {name: "hhh", email: "ggggg"},
    token: "fffff",
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers:{
        [authOperations.register.fulfilled] (state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true  
        }
    }
})

export default authSlice.reducer