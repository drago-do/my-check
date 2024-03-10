import { configureStore } from "@reduxjs/toolkit";
import actualOrderReducer from "./actualOrderSlice";

const persistentLocalStorage = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("my__checks", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    actualOrder: actualOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistentLocalStorage),
});

export default store;
