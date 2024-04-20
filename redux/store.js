import { configureStore } from "@reduxjs/toolkit";
import actualOrderReducer from "./actualOrderSlice";
import actualUserReducer from "./actualUserSlice";
import categoriesReducer from "./categoriesSlice";
import ordersReducer from "./orderListSlice";
import productsReducer from "./productsSlice";
import usersListReducer from "./usersListSlice";
import actualBusinessReducer from "./actualBusinessSlice";

const persistentLocalStorage = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("my__checks", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    actualOrder: actualOrderReducer,
    categories: categoriesReducer,
    products: productsReducer,
    orderList: ordersReducer,
    actualUser: actualUserReducer,
    usersList: usersListReducer,
    actualBusiness: actualBusinessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistentLocalStorage),
});

export default store;
