import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import Header from "./features/header/Header";
import PushNotification from "./ui/PushNotification";
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
import DiscountedProducts from "./pages/DiscountedProducts";
import TermsAndContions from "./pages/TermsAndConditions";
import SearchModal from "./features/header/search/SearchModal";
import PrivacyPage from "./pages/PrivacyPage";

export default function App() {
  const { isAdded, isDeleted } = useAppSelector((state) => state.cart);
  const { isVisible } = useAppSelector((state) => state.search);
  return (
    <BrowserRouter>
      <Header />
      {/* Toast */}
      {isAdded && <PushNotification type="add-product" />}
      {isDeleted && <PushNotification type="delete-product" />}

      {/* SearchModal */}
      {isVisible && <SearchModal />}

      <Routes>
        <Route path="/terms-and-conditions" element={<TermsAndContions />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route index element={<HomePage />} />
        {/* All products Route */}
        <Route path="/products" element={<AllProducts />} />
        {/* Discounted products */}
        <Route path="/products-on-sale" element={<DiscountedProducts />} />
        {/* Categories routes */}
        <Route path="/category/smartphones" element={<Smartphones />} />
        <Route path="/category/laptops" element={<Laptops />} />
        <Route path="/category/fragrances" element={<Fragrances />} />
        <Route path="/category/skincare" element={<Skincare />} />
        <Route path="/category/groceries" element={<Groceries />} />
        <Route path="/category/home-decoration" element={<HomeDecoration />} />
        <Route path="/category/furniture" element={<Furniture />} />
        <Route path="/category/tops" element={<Tops />} />
        <Route path="/category/sunglasses" element={<Sunglasses />} />
        <Route path="/category/automotive" element={<Automotive />} />
        <Route path="/category/motorcycle" element={<Motorcycle />} />
        <Route path="/category/lighting" element={<Lighting />} />
        <Route path="/category/womens-dresses" element={<WomensDresses />} />
        <Route path="/category/womens-shoes" element={<WomensShoes />} />
        <Route path="/category/womens-watches" element={<WomensWatches />} />
        <Route path="/category/womens-bags" element={<WomensBags />} />
        <Route
          path="/category/womens-jewellery"
          element={<WomensJewellery />}
        />
        <Route path="/category/mens-shirts" element={<MensShirts />} />
        <Route path="/category/mens-shoes" element={<MensShoes />} />
        <Route path="/category/mens-watches" element={<MensWatches />} />
        {/* Singe product Route */}
        <Route path="/products/:productId" element={<ProductPage />} />
        {/* User Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/users/:userId" element={<UserAccountPage />}>
            <Route
              path="/users/:userId/account-information"
              element={<AccountInformation />}
            />
            <Route path="/users/:userId/my-cart" element={<MyCart />} />
            <Route
              path="/users/:userId/change-password"
              element={<ChangePassword />}
            />
          </Route>
          {/* Checkout Route */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
        </Route>
        {/* Auth Routes */}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
