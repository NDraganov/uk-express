import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isReviews: boolean;
}

const initialState: InitialState = {
  isReviews: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openReviews(state) {
      state.isReviews = true;
    },
    closeReviews(state) {
      state.isReviews = false;
    },
  },
});

export const { openReviews, closeReviews } = productsSlice.actions;
export default productsSlice.reducer;
