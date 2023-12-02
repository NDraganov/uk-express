import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/header/CategoriesNav";
import HomePage from "./pages/HomePage";
import AllProducts from "./features/categories/all-products/AllProducts";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/SignUpPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import Footer from "./features/footer/Footer";
import PageNotFound from "./pages/PageNotFound";
import UserAccountPage from "./pages/UserAccountPage";
import AccountInformation from "./features/user-account/sidebar-links/account-info/AccountInformation";
import MyCart from "./features/user-account/sidebar-links/my-cart/MyCart";
import ChangePassword from "./features/user-account/sidebar-links/change-password/ChangePassword";
import Smartphones from "./features/categories/smartphones/Smartphones";
import Laptops from "./features/categories/laptops/Laptops";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesNav />
      <Routes>
        <Route index element={<HomePage />} />
        // All products Route
        <Route path="/products" element={<AllProducts />} />
        // Categories routes
        <Route
          path="/products/category/smartphones"
          element={<Smartphones />}
        />
        <Route path="/products/category/laptops" element={<Laptops />} />
        <Route path="/products/category/fragrances" element={} />
        <Route path="/products/category/skincare" element={} />
        <Route path="/products/category/groceries" element={} />
        <Route path="/products/category/home-decoration" element={} />
        <Route path="/products/category/furniture" element={} />
        <Route path="/products/category/tops" element={} />
        <Route path="/products/category/sunglasses" element={} />
        <Route path="/products/category/automotive" element={} />
        <Route path="/products/category/motorcycle" element={} />
        <Route path="/products/category/womens-dresses" element={} />
        <Route path="/products/category/womens-shoes" element={} />
        <Route path="/products/category/womens-watches" element={} />
        <Route path="/products/category/womens-bags" element={} />
        <Route path="/products/category/womens-jewellery" element={} />
        <Route path="/products/category/mens-shirts" element={} />
        <Route path="/products/category/mens-shoes" element={} />
        <Route path="/products/category/mens-watches" element={} />
        // Singe product Route
        <Route
          path="/all-products/product/:productId"
          element={<ProductPage />}
        />
        // User Route
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
          // Checkout Route
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
        </Route>
        // Auth Routes
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
