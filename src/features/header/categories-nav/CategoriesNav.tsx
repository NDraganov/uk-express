import { NavLink, Outlet } from "react-router-dom";
import {
  useGetAllProductsQuery,
  useGetAutomotiveQuery,
  useGetFragrancesQuery,
  useGetFurnitureQuery,
  useGetGroceriesQuery,
  useGetHomeDecorationQuery,
  useGetLaptopsQuery,
  useGetLightingQuery,
  useGetMensShirtsQuery,
  useGetMensShoesQuery,
  useGetMensWatchesQuery,
  useGetMotorcycleQuery,
  useGetSkincareQuery,
  useGetSmartphonesQuery,
  useGetSunglassesQuery,
  useGetTopsQuery,
  useGetWomensBagsQuery,
  useGetWomensDressesQuery,
  useGetWomensJewelleryQuery,
  useGetWomensShoesQuery,
  useGetWomesWatchesQuery,
} from "../../../api/productsApiSlice";
import { Dropdown } from "flowbite-react";
import NavigationLink from "./NavigationLink";

export default function CategoriesNav() {
  const { data: products } = useGetAllProductsQuery(undefined);
  const { data: smartphones } = useGetSmartphonesQuery(undefined);
  const { data: laptops } = useGetLaptopsQuery(undefined);
  const { data: fragrances } = useGetFragrancesQuery(undefined);
  const { data: skincare } = useGetSkincareQuery(undefined);
  const { data: groceries } = useGetGroceriesQuery(undefined);
  const { data: homeDecoration } = useGetHomeDecorationQuery(undefined);
  const { data: furniture } = useGetFurnitureQuery(undefined);
  const { data: tops } = useGetTopsQuery(undefined);
  const { data: sunglasses } = useGetSunglassesQuery(undefined);
  const { data: automotive } = useGetAutomotiveQuery(undefined);
  const { data: motorcycle } = useGetMotorcycleQuery(undefined);
  const { data: lighting } = useGetLightingQuery(undefined);
  const { data: womansDresses } = useGetWomensDressesQuery(undefined);
  const { data: womensShoes } = useGetWomensShoesQuery(undefined);
  const { data: womensWatches } = useGetWomesWatchesQuery(undefined);
  const { data: womensBags } = useGetWomensBagsQuery(undefined);
  const { data: womensJewellery } = useGetWomensJewelleryQuery(undefined);
  const { data: mensShirts } = useGetMensShirtsQuery(undefined);
  const { data: mensShoes } = useGetMensShoesQuery(undefined);
  const { data: mensWatches } = useGetMensWatchesQuery(undefined);

  return (
    <>
      <div className="border-b border-gray-300 px-4 py-2 dark:border-gray-500">
        <nav>
          <ul className="no-scrollbar grid w-full grid-flow-col items-center gap-10 overflow-scroll">
            <NavigationLink
              to="/products"
              title="All products"
              onClick={() => {
                return products?.products;
              }}
            />
            <NavigationLink
              to="/category/smartphones"
              title="Smartphones"
              onClick={() => {
                return smartphones?.products;
              }}
            />
            <NavigationLink
              to="/category/laptops"
              title="Laptops"
              onClick={() => {
                return laptops?.products;
              }}
            />
            <NavigationLink
              to="/category/fragrances"
              title="Fragrances"
              onClick={() => {
                return fragrances?.products;
              }}
            />
            <NavigationLink
              to="/category/skincare"
              title="Skincare"
              onClick={() => {
                return skincare?.products;
              }}
            />
            <NavigationLink
              to="/category/groceries"
              title="Groceries"
              onClick={() => {
                return groceries?.products;
              }}
            />
            <NavigationLink
              to="/category/home-decoration"
              title="Home decoration"
              onClick={() => {
                return homeDecoration?.products;
              }}
            />
            <NavigationLink
              to="/category/furniture"
              title="Furniture"
              onClick={() => {
                return furniture?.products;
              }}
            />
            <NavigationLink
              to="/category/tops"
              title="Tops"
              onClick={() => {
                return tops?.products;
              }}
            />
            <NavigationLink
              to="/category/sunglasses"
              title="Sunglasses"
              onClick={() => {
                return sunglasses?.products;
              }}
            />
            <NavigationLink
              to="/category/automotive"
              title="Automotive"
              onClick={() => {
                return automotive?.products;
              }}
            />
            <NavigationLink
              to="/category/motorcycle"
              title="Motorcycle"
              onClick={() => {
                return motorcycle?.products;
              }}
            />
            <NavigationLink
              to="/category/lighting"
              title="Lighting"
              onClick={() => {
                return lighting?.products;
              }}
            />

            <Dropdown className="dark:bg-slate-800" label="Womans" inline>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/womens-dresses"
                onClick={() => {
                  return womansDresses?.products;
                }}
              >
                Womens dresses
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/womens-shoes"
                onClick={() => {
                  return womensShoes?.products;
                }}
              >
                Womens shoes
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/womens-watches"
                onClick={() => {
                  return womensWatches?.products;
                }}
              >
                Womens watches
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/womens-bags"
                onClick={() => {
                  return womensBags?.products;
                }}
              >
                Womens bags
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/womens-jewellery"
                onClick={() => {
                  return womensJewellery?.products;
                }}
              >
                Womens jewellery
              </Dropdown.Item>
            </Dropdown>

            <Dropdown className="dark:bg-slate-800" label="Mens" inline>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/mens-shirts"
                onClick={() => {
                  return mensShirts?.products;
                }}
              >
                Mens shirts
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/mens-shoes"
                onClick={() => {
                  return mensShoes?.products;
                }}
              >
                Mens Shoes
              </Dropdown.Item>
              <Dropdown.Item
                className="dark:text-gray-400"
                as={NavLink}
                to="/category/mens-watches"
                onClick={() => {
                  return mensWatches?.products;
                }}
              >
                Mens watches
              </Dropdown.Item>
            </Dropdown>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
