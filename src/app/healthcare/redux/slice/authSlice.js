"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authType: "signin",
  authModalOpen: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthModalOpen: (state) => {
      state.authModalOpen = !state.authModalOpen;
    },
    setAuthType: (state, action) => {
      state.authType = action.payload;
    },
  },
});

export const { setAuthModalOpen, setAuthType } = authSlice.actions;

export default authSlice.reducer;
