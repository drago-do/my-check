import { createSlice } from "@reduxjs/toolkit";
import orderListExample from "../utils/OrderListExample";

const DefaultState = orderListExample;

const initialState = (() => {
  if (typeof window !== "undefined") {
    const state = localStorage.getItem("my__checks");
    if (state) {
      return JSON.parse(state).orderList;
    }
  }
  return DefaultState;
})();

export const orderListSlice = createSlice({
  name: "orderList",
  initialState: initialState,
  reducers: {
    setOrderList_: (state, action) => {
      state.orderName = action.payload;
    },
    getPendentOrders_: (state, action) => {
      //Return all pendent orders "deliver: false , paid: false"
      return state.filter(
        (order) => order.fullDeliver === false && order.paid === false
      );
    },
    getCompletedOrders_: (state, action) => {
      //Return all completed orders "deliver: true , paid: true"
      return state.filter(
        (order) => order.fullDeliver === true && order.paid === true
      );
    },
  },
});

export const { setOrderList_, getPendentOrders_, getCompletedOrders_ } =
  orderListSlice.actions;
export default orderListSlice.reducer;
