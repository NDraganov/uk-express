import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Products } from "./products-types/productsTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Products, undefined>({
      query: () => "products?limit=0",
      providesTags: ["Products"],
    }),
    getSmartphones: builder.query<Products, undefined>({
      query: () => "products/category/smartphones",
    }),
    getLaptops: builder.query<Products, undefined>({
      query: () => "products/category/laptops",
    }),
    getFragrances: builder.query<Products, undefined>({
      query: () => "products/category/fragrances",
    }),
    getSkincare: builder.query<Products, undefined>({
      query: () => "products/category/skincare",
    }),
    getGroceries: builder.query<Products, undefined>({
      query: () => "products/category/groceries",
    }),
    getHomeDecoration: builder.query<Products, undefined>({
      query: () => "products/category/home-decoration",
    }),
    getFurniture: builder.query<Products, undefined>({
      query: () => "products/category/furniture",
    }),
    getTops: builder.query<Products, undefined>({
      query: () => "products/category/tops",
    }),
    getWomensDresses: builder.query<Products, undefined>({
      query: () => "products/category/womens-dresses",
    }),
    getWomensShoes: builder.query<Products, undefined>({
      query: () => "products/category/womens-shoes",
    }),
    getMensShirts: builder.query<Products, undefined>({
      query: () => "products/category/mens-shirts",
    }),
    getMensShoes: builder.query<Products, undefined>({
      query: () => "products/category/mens-shoes",
    }),
    getMensWatches: builder.query<Products, undefined>({
      query: () => "products/category/mens-watches",
    }),
    getWomesWatches: builder.query<Products, undefined>({
      query: () => "products/category/womens-watches",
    }),
    getWomensBags: builder.query<Products, undefined>({
      query: () => "products/category/womens-bags",
    }),
    getWomensJewellery: builder.query<Products, undefined>({
      query: () => "products/category/womens-jewellery",
    }),
    getSunglasses: builder.query<Products, undefined>({
      query: () => "products/category/sunglasses",
    }),
    getAutomotive: builder.query<Products, undefined>({
      query: () => "products/category/automotive",
    }),
    getMotorcycle: builder.query<Products, undefined>({
      query: () => "products/category/motorcycle",
    }),
    getLighting: builder.query<Products, undefined>({
      query: () => "products/category/lighting",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSmartphonesQuery,
  useGetLaptopsQuery,
  useGetFragrancesQuery,
  useGetSkincareQuery,
  useGetGroceriesQuery,
  useGetHomeDecorationQuery,
  useGetFurnitureQuery,
  useGetTopsQuery,
  useGetWomensDressesQuery,
  useGetWomensShoesQuery,
  useGetMensShirtsQuery,
  useGetMensShoesQuery,
  useGetMensWatchesQuery,
  useGetWomesWatchesQuery,
  useGetWomensBagsQuery,
  useGetWomensJewelleryQuery,
  useGetSunglassesQuery,
  useGetAutomotiveQuery,
  useGetMotorcycleQuery,
  useGetLightingQuery,
} = productsApi;
