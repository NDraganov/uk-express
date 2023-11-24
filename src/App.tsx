import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/header/CategoriesNav";
import HomePage from "./pages/HomePage";
import AllProducts from "./features/all-products/AllProducts";
import Electronics from "./features/categories/electronics/Electronics";
import Jewelery from "./features/categories/jewelery/Jewelery";
import WomenClothing from "./features/categories/women-clothing/WomenClothing";
import MenClothing from "./features/categories/men-clothing/MensClothing";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesNav />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route
          path="/all-products/product/:productId"
          element={<ProductPage />}
        />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/men-clothing" element={<MenClothing />} />
        <Route path="/women-clothing" element={<WomenClothing />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
