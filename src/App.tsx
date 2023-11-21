import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/header/CategoriesNav";
import AllProducts from "./features/all-products/AllProducts";
import Electronics from "./features/categories/electronics/Electronics";
import Jewelery from "./features/categories/jewelery/Jewelery";
import WomenClothing from "./features/categories/women-clothing/WomenClothing";
import MenClothing from "./features/categories/men-clothing/MensClothing";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesNav />
      <Routes>
        <Route index />
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
      </Routes>
    </BrowserRouter>
  );
}
