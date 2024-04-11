import { createSlice } from "@reduxjs/toolkit";

const DefaultState = null;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).actualUser;
    }
  }
  return DefaultState;
})();

export const actualBusinessSlice = createSlice({
  name: "actualBusiness",
  initialState: initialState,
  reducers: {
    setActualBusiness_: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActualBusiness_ } = actualBusinessSlice.actions;
export default actualBusinessSlice.reducer;
