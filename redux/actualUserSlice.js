import { createSlice } from "@reduxjs/toolkit";
import actualUserExample from "../utils/actualUserExample";

const DefaultState = actualUserExample;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).actualUser;
    }
  }
  return DefaultState;
})();

export const actualUserSlice = createSlice({
  name: "actualUser",
  initialState: initialState,
  reducers: {
    setActualUser_: (state, action) => {
      state.orderName = action.payload;
    },
  },
});

export const { setActualUser_ } = actualUserSlice.actions;
export default actualUserSlice.reducer;
