import { Outlet } from "react-router-dom";
import NavigationLink from "../../ui/NavigationLink";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllProducts } from "../all-products/allProductsSlice";
import { fetchElectronics } from "../categories/electronics/electronicsSlice";
import { fetchJewelery } from "../categories/jewelery/jewelerySlice";
import { fetchMens } from "../categories/men-clothing/menSlice";
import { fetchWomen } from "../categories/women-clothing/womenSlice";

export default function CategoriesNav() {
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <nav className="h-12 bg-black">
          <ul className="flex items-center justify-center gap-4 py-1 text-sm text-slate-200">
            <NavigationLink
              to="all-products"
              title="All products"
              onClick={() => dispatch(fetchAllProducts())}
            />
            <NavigationLink
              to="electronics"
              title="Electronics"
              onClick={() => dispatch(fetchElectronics())}
            />
            <NavigationLink
              to="jewelery"
              title="Jewelery"
              onClick={() => dispatch(fetchJewelery())}
            />
            <NavigationLink
              to="men-clothing"
              title="Men's clothing"
              onClick={() => dispatch(fetchMens())}
            />
            <NavigationLink
              to="women-clothing"
              title="Women's clothing"
              onClick={() => dispatch(fetchWomen())}
            />
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
