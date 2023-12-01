import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: number;
  brand: string;
  category: string;
  title: string;
  description?: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
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
