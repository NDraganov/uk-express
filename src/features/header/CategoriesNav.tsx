import { NavLink, Outlet } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetSmartphonesQuery,
} from "../../api/productsApiSlice";
import { Dropdown } from "flowbite-react";

export default function CategoriesNav() {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { data: smartphones } = useGetSmartphonesQuery(undefined);

  return (
    <>
      <header className="h-12 bg-black px-4 text-slate-50">
        <nav>
          <Dropdown className="" label="All categories" inline>
            <Dropdown.Item
              as={NavLink}
              to="/products/category/smartphones"
              onClick={() => {
                return smartphones?.products;
              }}
            >
              Smartphones
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              as={NavLink}
              to="/products"
              onClick={() => {
                return products?.products;
              }}
            >
              All products
            </Dropdown.Item>
          </Dropdown>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
