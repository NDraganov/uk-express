import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "../features/all-products/allProductsSlice";
import cartReducer from "../features/cart/cartSlice";
import electronicsReducer from "../features/categories/electronics/electronicsSlice";
import jeweleryReducer from "../features/categories/jewelery/jewelerySlice";
import mensReducer from "../features/categories/men-clothing/menSlice";
import womanReducer from "../features/categories/women-clothing/womenSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
    electronics: electronicsReducer,
    jewelery: jeweleryReducer,
    menClothing: mensReducer,
    womanClothing: womanReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
