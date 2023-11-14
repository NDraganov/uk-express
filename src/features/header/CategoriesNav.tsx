import { Outlet } from "react-router-dom";
import NavigationLink from "../../ui/NavigationLink";

export default function CategoriesNav() {
  return (
    <>
      <header>
        <nav className="h-12 bg-slate-700">
          <ul className="flex items-center justify-center gap-4 py-1 text-lg text-slate-200">
            <NavigationLink
              to="products"
              title="All products"
              onClick={() => console.log("a")}
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
