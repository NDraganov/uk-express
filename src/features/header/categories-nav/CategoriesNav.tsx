import { Outlet } from "react-router-dom";
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
      <div className="mt-10 px-4 sm:px-0">
        <nav>
          <ul className="grid grid-cols-2 place-items-start gap-2 sm:mx-40 sm:grid-cols-7">
            <NavigationLink
              to="/products"
              title="All products"
              onClick={() => {
                return products?.products;
              }}
            />
            <NavigationLink
              to="/products/category/smartphones"
              title="Smartphones"
              onClick={() => {
                return smartphones?.products;
              }}
            />
            <NavigationLink
              to="/products/category/laptops"
              title="Laptops"
              onClick={() => {
                return laptops?.products;
              }}
            />
            <NavigationLink
              to="/products/category/fragrances"
              title="Fragrances"
              onClick={() => {
                return fragrances?.products;
              }}
            />
            <NavigationLink
              to="/products/category/skincare"
              title="Skincare"
              onClick={() => {
                return skincare?.products;
              }}
            />
            <NavigationLink
              to="/products/category/groceries"
              title="Groceries"
              onClick={() => {
                return groceries?.products;
              }}
            />
            <NavigationLink
              to="/products/category/home-decoration"
              title="Home decoration"
              onClick={() => {
                return homeDecoration?.products;
              }}
            />
            <NavigationLink
              to="/products/category/furniture"
              title="Furniture"
              onClick={() => {
                return furniture?.products;
              }}
            />
            <NavigationLink
              to="/products/category/tops"
              title="Tops"
              onClick={() => {
                return tops?.products;
              }}
            />
            <NavigationLink
              to="/products/category/sunglasses"
              title="Sunglasses"
              onClick={() => {
                return sunglasses?.products;
              }}
            />
            <NavigationLink
              to="/products/category/automotive"
              title="Automotive"
              onClick={() => {
                return automotive?.products;
              }}
            />
            <NavigationLink
              to="/products/category/motorcycle"
              title="Motorcycle"
              onClick={() => {
                return motorcycle?.products;
              }}
            />
            <NavigationLink
              to="/products/category/lighting"
              title="Lighting"
              onClick={() => {
                return lighting?.products;
              }}
            />
            <NavigationLink
              to="/products/category/womens-dresses"
              title="Womens dresses"
              onClick={() => {
                return womansDresses?.products;
              }}
            />
            <NavigationLink
              to="/products/category/womens-shoes"
              title="Womens shoes"
              onClick={() => {
                return womensShoes?.products;
              }}
            />
            <NavigationLink
              to="/products/category/womens-watches"
              title="Womens watches"
              onClick={() => {
                return womensWatches?.products;
              }}
            />
            <NavigationLink
              to="/products/category/womens-bags"
              title="Womens bags"
              onClick={() => {
                return womensBags?.products;
              }}
            />
            <NavigationLink
              to="/products/category/womens-jewellery"
              title="Womens jewellery"
              onClick={() => {
                return womensJewellery?.products;
              }}
            />
            <NavigationLink
              to="/products/category/mens-shirts"
              title="Mens shirts"
              onClick={() => {
                return mensShirts?.products;
              }}
            />
            <NavigationLink
              to="/products/category/mens-shoes"
              title="Mens shoes"
              onClick={() => {
                return mensShoes?.products;
              }}
            />
            <NavigationLink
              to="/products/category/mens-watches"
              title="Mens watches"
              onClick={() => {
                return mensWatches?.products;
              }}
            />
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}
