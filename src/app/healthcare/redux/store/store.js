"use client"
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import chatReducer from "../slice/chatSlice";
import authReducer from "../slice/authSlice";
import simliReducer from '../slice/simliSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    auth: authReducer,
    simli: simliReducer,
  },
});
