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
import Fragrances from "./features/categories/fragrances/Fragrances";
import Skincare from "./features/categories/skincare/Skincare";
import Groceries from "./features/categories/groceries/Groceries";
import HomeDecoration from "./features/categories/home-decoration/HomeDecoration";
import Furniture from "./features/categories/furniture/Furniture";
import Tops from "./features/categories/tops/Tops";
import Sunglasses from "./features/categories/sunglasses/Sunglasses";
import Automotive from "./features/categories/automotive/Automotive";
import Motorcycle from "./features/categories/motorcycle/Motorcycle";
import WomensDresses from "./features/categories/womens-dresses/WomensDresses";
import WomensShoes from "./features/categories/womens-shoes/WomensShoes";
import WomensWatches from "./features/categories/womens-watches/WomensWatches";
import WomensBags from "./features/categories/womens-bags/WomensBags";
import WomensJewellery from "./features/categories/womens-jewellery/WomensJewellery";
import MensShirts from "./features/categories/mens-shirts/MensShirts";
import MensShoes from "./features/categories/mens-shoes/MensShoes";
import MensWatches from "./features/categories/mens-watches/MensWatches";
import Lighting from "./features/categories/lighting/Lighting";

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
        <Route path="/products/category/fragrances" element={<Fragrances />} />
        <Route path="/products/category/skincare" element={<Skincare />} />
        <Route path="/products/category/groceries" element={<Groceries />} />
        <Route
          path="/products/category/home-decoration"
          element={<HomeDecoration />}
        />
        <Route path="/products/category/furniture" element={<Furniture />} />
        <Route path="/products/category/tops" element={<Tops />} />
        <Route path="/products/category/sunglasses" element={<Sunglasses />} />
        <Route path="/products/category/automotive" element={<Automotive />} />
        <Route path="/products/category/motorcycle" element={<Motorcycle />} />
        <Route path="/products/category/lighting" element={<Lighting />} />
        <Route
          path="/products/category/womens-dresses"
          element={<WomensDresses />}
        />
        <Route
          path="/products/category/womens-shoes"
          element={<WomensShoes />}
        />
        <Route
          path="/products/category/womens-watches"
          element={<WomensWatches />}
        />
        <Route path="/products/category/womens-bags" element={<WomensBags />} />
        <Route
          path="/products/category/womens-jewellery"
          element={<WomensJewellery />}
        />
        <Route path="/products/category/mens-shirts" element={<MensShirts />} />
        <Route path="/products/category/mens-shoes" element={<MensShoes />} />
        <Route
          path="/products/category/mens-watches"
          element={<MensWatches />}
        />
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
