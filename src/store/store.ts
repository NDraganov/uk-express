import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news-subscription/newsSlice";
import darkModeReducer from "../features/header/dark-mode/darkModeSlice";
import mobileMenuReducer from "../features/mobile-menu/mobileMenuSlice";
import authReducer from "../features/auth/authSlice";
import searchReducer from "../features/header/search/searchSlice";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import productReviewsReducer from "../features/products/product/product-reviews/productReviewsSlice";
import paginationReducer from "../features/pagination/paginationSlice";
import { productsApi } from "../api/productsApiSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    darkMode: darkModeReducer,
    mobileMenu: mobileMenuReducer,
    auth: authReducer,
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
    productReviews: productReviewsReducer,
    pagination: paginationReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
