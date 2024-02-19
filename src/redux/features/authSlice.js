import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
  isLogin: false,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      (state.isLogin = true), (state.userId = action.payload.userId);
      (state.token = action.payload.token), (state.role = action.payload.role);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
