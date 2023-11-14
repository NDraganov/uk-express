import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "../features/all-products/allProductsSlice";

export const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
