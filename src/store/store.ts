import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news-subscription/newsSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import { productsApi } from "../api/productsApiSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
