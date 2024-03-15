import { createSlice } from "@reduxjs/toolkit";
import CategoriesExample from "./../utils/categoriesExample";

const DefaultState = CategoriesExample;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).categories;
    } else {
      return DefaultState;
    }
  }
  return DefaultState;
})();

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories_: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories_ } = categoriesSlice.actions;
export default categoriesSlice.reducer;
