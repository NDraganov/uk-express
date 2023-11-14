import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/header/CategoriesNav";
import AllProducts from "./features/all-products/AllProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <CategoriesNav />
      <Routes>
        <Route index />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
