import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: number;
  title: string;
  description: string;
}

interface Products {
  products: Product[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<Products, undefined>({
      query: () => "products",
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
