import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/header/CategoriesNav";
import HomePage from "./pages/HomePage";
import AllProducts from "./features/categories/all-products/AllProducts";
import Electronics from "./features/categories/electronics/Electronics";
import Jewelry from "./features/categories/jewelry/Jewelry";
import WomenClothing from "./features/categories/women-clothing/WomenClothing";
import MenClothing from "./features/categories/men-clothing/MensClothing";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import Footer from "./features/footer/Footer";
import PageNotFound from "./pages/PageNotFound";
import UserAccountPage from "./pages/UserAccountPage";
import AccountInformation from "./features/user-account/sidebar-links/account-info/AccountInformation";
import MyCart from "./features/user-account/sidebar-links/my-cart/MyCart";
import ChangePassword from "./features/user-account/sidebar-links/change-password/ChangePassword";

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
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/men-clothing" element={<MenClothing />} />
        <Route path="/women-clothing" element={<WomenClothing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users/:userId" element={<UserAccountPage />}>
            <Route
              path="/users/:userId/account-information"
              element={<AccountInformation />}
            />
            <Route path="/users/:userId/my-card" element={<MyCart />} />
            <Route
              path="/users/:userId/change-password"
              element={<ChangePassword />}
            />
          </Route>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
