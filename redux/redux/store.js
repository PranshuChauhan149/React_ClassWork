import { configureStore } from "@reduxjs/toolkit";
import counterRe from "./slice/counterSlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterRe,
    cart: cartReducer,
  },
});
