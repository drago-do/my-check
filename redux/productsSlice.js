import { createSlice } from "@reduxjs/toolkit";
import ProductsExample from "../utils/ProductsExample";

const DefaultState = ProductsExample;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).products;
    }
  }
  return DefaultState;
})();

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProducts_: (state, action) => {
      state.orderName = action.payload;
    },
  },
});

export const { setProducts_ } = productsSlice.actions;
export default productsSlice.reducer;
