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
} from "../../api/productsApiSlice";
import { Dropdown } from "flowbite-react";

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
      <div className="flex h-full items-center border-b border-gray-300 px-4 py-1">
        <nav>
          <Dropdown className="" label="Categories" inline>
            <div className="flex">
              <div id="first-six">
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/smartphones"
                  onClick={() => {
                    return smartphones?.products;
                  }}
                >
                  Smartphones
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/laptops"
                  onClick={() => {
                    return laptops?.products;
                  }}
                >
                  Laptops
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/fragrances"
                  onClick={() => {
                    return fragrances?.products;
                  }}
                >
                  Fragrances
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/skincare"
                  onClick={() => {
                    return skincare?.products;
                  }}
                >
                  Skincare
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/groceries"
                  onClick={() => {
                    return groceries?.products;
                  }}
                >
                  Groceries
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/home-decoration"
                  onClick={() => {
                    return homeDecoration?.products;
                  }}
                >
                  Home decoration
                </Dropdown.Item>
              </div>
              <div id="second-six">
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/furniture"
                  onClick={() => {
                    return furniture?.products;
                  }}
                >
                  Furniture
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/tops"
                  onClick={() => {
                    return tops?.products;
                  }}
                >
                  Tops
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/sunglasses"
                  onClick={() => {
                    return sunglasses?.products;
                  }}
                >
                  Sunglasses
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/automotive"
                  onClick={() => {
                    return automotive?.products;
                  }}
                >
                  Automotive
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/motorcycle"
                  onClick={() => {
                    return motorcycle?.products;
                  }}
                >
                  Motorcycle
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/lighting"
                  onClick={() => {
                    return lighting?.products;
                  }}
                >
                  Lighting
                </Dropdown.Item>
              </div>
              <div id="womens">
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/womens-dresses"
                  onClick={() => {
                    return womansDresses?.products;
                  }}
                >
                  Womens dresses
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/womens-shoes"
                  onClick={() => {
                    return womensShoes?.products;
                  }}
                >
                  Womens shoes
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/womens-watches"
                  onClick={() => {
                    return womensWatches?.products;
                  }}
                >
                  Womens watches
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/womens-bags"
                  onClick={() => {
                    return womensBags?.products;
                  }}
                >
                  Womens bags
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/womens-jewellery"
                  onClick={() => {
                    return womensJewellery?.products;
                  }}
                >
                  Womens jewellery
                </Dropdown.Item>
              </div>
              <div id="mens">
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/mens-shirts"
                  onClick={() => {
                    return mensShirts?.products;
                  }}
                >
                  Mens shirts
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/mens-shoes"
                  onClick={() => {
                    return mensShoes?.products;
                  }}
                >
                  Mens Shoes
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to="/products/category/mens-watches"
                  onClick={() => {
                    return mensWatches?.products;
                  }}
                >
                  Mens watches
                </Dropdown.Item>
              </div>
            </div>

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
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
