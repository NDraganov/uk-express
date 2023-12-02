import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  type Laptops,
  type Products,
  type Smartphones,
} from "./products-types/productsTypes";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Products, undefined>({
      query: () => "products?limit=0",
      providesTags: ["Products"],
    }),
    getSmartphones: builder.query<Smartphones, undefined>({
      query: () => "products/category/smartphones",
    }),
    getLaptops: builder.query<Laptops, undefined>({
      query: () => "products/category/laptops",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSmartphonesQuery,
  useGetLaptopsQuery,
} = productsApi;
