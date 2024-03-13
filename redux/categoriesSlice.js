import { createSlice } from "@reduxjs/toolkit";
import CategoriesExample from "../utils/categoriesExample";

const DefaultState = CategoriesExample;

const initialState = (() => {
  const state = localStorage.getItem("my__checks");
  if (state) {
    return JSON.parse(state).categories;
  }
  return DefaultState;
})();

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories_: (state, action) => {
      state.orderName = action.payload;
    },
  },
});

export const { setCategories_ } = categoriesSlice.actions;
export default categoriesSlice.reducer;
