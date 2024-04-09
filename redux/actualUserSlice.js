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

export const actualUserSlice = createSlice({
  name: "actualUser",
  initialState: initialState,
  reducers: {
    setActualUser_: (state, action) => {
      return action.payload; // Actualiza el estado completo con los datos del usuario
    },
  },
});

export const { setActualUser_ } = actualUserSlice.actions;
export default actualUserSlice.reducer;
