import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import electronicsReducer from "../features/categories/electronics/electronicsSlice";
import jewelryReducer from "../features/categories/jewelry/jewelerySlice";
import mensReducer from "../features/categories/men-clothing/menSlice";
import womanReducer from "../features/categories/women-clothing/womenSlice";
import authReducer from "../features/auth/authSlice";
import { productsApi } from "../api/productsApiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    electronics: electronicsReducer,
    jewelery: jewelryReducer,
    menClothing: mensReducer,
    womanClothing: womanReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
