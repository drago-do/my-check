import { createSlice } from "@reduxjs/toolkit";
import usersListExample from "../utils/userListExample";

const DefaultState = usersListExample;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).usersList;
    }
  }
  return DefaultState;
})();

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: initialState,
  reducers: {
    setUsersList_: (state, action) => {
      state.orderName = action.payload;
    },
  },
});

export const { setUsersList_ } = usersListSlice.actions;
export default usersListSlice.reducer;
