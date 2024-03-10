import { createSlice } from "@reduxjs/toolkit";

const DefaultState = {
  _id: "",
  madeBy: { _id: "", username: "" },
  location: {
    mapTable: {
      _id: "",
      name: "Default Table Name",
    },
    position: [0, 0],
  },
  orderName: "Default Order Name",
  creationDate: "2023-11-04T10:00:01Z",
  products: [],
  total: 0,
};

const initialState = (() => {
  const state = localStorage.getItem("my__checks");
  if (state) {
    return JSON.parse(state).actualOrder;
  }
  return DefaultState;
})();

export const actualOrderSlice = createSlice({
  name: "actualOrder",
  initialState: initialState,
  reducers: {
    setOrderName_: (state, action) => {
      state.orderName = action.payload;
    },
    addProduct_: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct_: (state, action) => {
      state.products = state.products.filter(
        (product) => product.addedAT !== action.payload
      );
    },
  },
});

export const { setOrderName_, addProduct_, deleteProduct_ } =
  actualOrderSlice.actions;
export default actualOrderSlice.reducer;
