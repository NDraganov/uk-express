import { Outlet } from "react-router-dom";
import NavigationLink from "../../ui/NavigationLink";
import { useAppDispatch } from "../../store/hooks";
import { fetchAllProducts } from "../all-products/allProductsSlice";

export default function CategoriesNav() {
  const dispatch = useAppDispatch();

  return (
    <>
      <header>
        <nav className="h-12 bg-slate-700">
          <ul className="flex items-center justify-center gap-4 py-1 text-lg text-slate-200">
            <NavigationLink
              to="all-products"
              title="All products"
              onClick={() => dispatch(fetchAllProducts())}
            />
            <NavigationLink
              to="electronics"
              title="Electronics"
              onClick={() => console.log("a")}
            />
            <NavigationLink
              to="jewelery"
              title="Jewelery"
              onClick={() => console.log("a")}
            />
            <NavigationLink
              to="men's-clothing"
              title="Men's clothing"
              onClick={() => console.log("a")}
            />
            <NavigationLink
              to="women's-clothing"
              title="Women's clothing"
              onClick={() => console.log("a")}
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
