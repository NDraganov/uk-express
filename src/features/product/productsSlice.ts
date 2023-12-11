import { createSlice } from "@reduxjs/toolkit";
import { type Review } from "../../api/products-types/productsTypes";

interface ProductsState {
  comments: Review[];
}

const initialState: ProductsState = {
  comments: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setReviews(state, action) {
      state.comments = action.payload;
    },
  },
});

export const { setReviews } = productsSlice.actions;
export default productsSlice.reducer;
