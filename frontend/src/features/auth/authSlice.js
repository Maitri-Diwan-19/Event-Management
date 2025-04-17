import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState:{
        user : null ,
        token : null,
        isLoggedIn : false,
        isLoading : false,
        error : null,
    },
    reducers: {
        loginStart : (state) => {
            state.isLoading = true;
        },
        loginSuccess : (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        loginFailure : (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout : (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        registerStart : (state) => {
            state.isLoading = true;
        },
        registerSuccess : (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        registerFailure : (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        extraReducers : (state, action) => {
            state.isLoading = false;
            state.error = null;
        }

    
    
    }
    
})
const {loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure} = authSlice.actions
export default authSlice.reducer
