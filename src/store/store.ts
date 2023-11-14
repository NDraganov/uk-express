import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "../features/all-products/allProductsSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
